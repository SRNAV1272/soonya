export async function Login(db, phone_no, password) {
    try {
        const data = await db.collection('auth').find({
            phone_no: phone_no,
            password: password
        }).toArray()
        if (data?.length > 0)
            return {
                login: true,
                name: `${data[0]?.firstName + ' ' + data[0]?.lastName}`
            }
        else
            return { login: false }

    } catch (e) {
        return { login: false }
    }
}

export async function Exists(db, phone_no, password) {
    try {
        const data = await db.collection('cards').find({
            phone_no: phone_no,
            password: password
        }).toArray()
        if (data?.length > 0)
            return true
        else
            return false

    } catch (e) {
        return false
    }
}

export async function PhoneNumberExists(db, phone_no) {
    try {
        const data = await db.collection('auth').find({
            phone_no: phone_no
        }).toArray()

        if (data?.length > 0)
            return true
        else
            return false

    } catch (e) {
        return false
    }
}

export async function JsonToken(jwt, phone_no, password) {
    try {
        let token = jwt.sign({
            phone_no: phone_no,
            password: password
        }, process.env.excryptSecret, { expiresIn: '12h' })
        return token
    } catch (e) {
        console.error(e)
        return (false)
    }
}


export async function VerifyOTP(db, OTP) {
    try {
        const data = await db.collection('otp').find({
            OTP: OTP
        }).toArray()

        if (data?.length > 0) {
            try {
                await db.collection('auth').insertOne({
                    firstName: data[0]?.firstName,
                    lastName: data[0]?.lastName,
                    password: data[0]?.password,
                    phone_no: data[0]?.phone_no
                })
                return true
            } catch (e) {
                console.error(e)
                return false
            }
        }
        else
            return false

    } catch (e) {
        console.error(e)
        return false
    }
}

// function generateOTP() {
//     var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let OTP = '';

//     var len = string.length;
//     for (let i = 0; i < 5; i++) {
//         OTP += string[Math.floor(Math.random() * len)];
//     }
//     return OTP;
// }

// export async function GetOTP(db, firstName, lastName, password, phone_no) {

//     try {
//         const OTP = generateOTP()
//         console.log(OTP, phone_no)
//         axios.get(`https://api.authkey.io/request?authkey=${process.env.authkey}&mobile=${phone_no}&country_code=91&sid=${process.env.sid}&otp=${OTP}`)
//             .then(async data => {
//                 console.log(data.data)
//                 if (data.data.Message === 'Submitted Successfully') {
//                     try {
//                         await db.collection('otp').insertOne({
//                             OTP: OTP,
//                             LogID: data.data.LogID,
//                             firstName: firstName,
//                             lastName: lastName,
//                             password: password
//                         })
//                         return true
//                     } catch (e) {
//                         console.error(e)
//                         return false
//                     }
//                 }
//             })
//             .catch(err => {
//                 console.error(err)
//                 return false
//             })
//     } catch (e) {
//         console.error(e)
//         return false
//     }

// }
