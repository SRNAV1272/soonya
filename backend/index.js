import express, { response } from 'express'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
import { MongoClient, ServerApiVersion } from 'mongodb'
import { JsonToken, Login, PhoneNumberExists, VerifyOTP } from './functions.js'
import jwt from 'jsonwebtoken'
import axios from 'axios'

const app = new express()
const port = 8080

app.use(express.json())
app.use(fileUpload({
    limits: {
        fileSize: 50 * 1024 * 1024
    }
}))
app.use(cors())
app.use(express.static(path.join(`${process.cwd()}`, "build")))

const client = new MongoClient(process.env.uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

function generateOTP() {
    var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = '';

    var len = string.length;
    for (let i = 0; i < 5; i++) {
        OTP += string[Math.floor(Math.random() * len)];
    }
    return OTP;
}

app.listen(port, () => {
    console.log(`Server is Listening at port ${port} !`)
})

app.post('/login', async (req, res) => {
    const { phone_no, password } = req.body
    try {

        await client.connect()
        const db = client.db('tapwave')
        Login(db, phone_no, password)
            .then(async response => {
                console.log("data =>", response)
                if (response) res.send({ msg: 'Login Successful !', jwtoken: await JsonToken(jwt, phone_no, password) })
                else { res.status(500); res.send({ msg: 'User Not Found !' }) }
            })
            .catch(error => console.error("error => ", error))

    } catch (e) {
        console.error(e)
        res.status(500)
        res.send({ msg: 'Server Error' })
    }
})


app.post('/signup', async (req, res) => {
    const { phone_no, firstName, lastName, password } = req.body
    try {

        await client.connect()
        const db = client.db('tapwave')
        const exists = await PhoneNumberExists(db, phone_no)

        if (exists) {
            res.send({ msg: 'Phone Number Already Exists !' })
        } else {
            try {
                const OTP = generateOTP()
                console.log(OTP, phone_no)
                axios.get(`https://api.authkey.io/request?authkey=${process.env.authkey}&mobile=${phone_no}&country_code=91&sid=${process.env.sid}&otp=${OTP}`)
                    .then(async data => {
                        console.log(data.data)
                        if (data.data.Message === 'Submitted Successfully') {
                            await db.collection('otp').insertOne({
                                phone_no: phone_no,
                                OTP: OTP,
                                LogID: data.data.LogID,
                                firstName: firstName,
                                lastName: lastName,
                                password: password
                            })
                            res.send({ msg: 'OTP Generated Successfully !' })
                        }
                        else res.send({ msg: 'OTP Generation Failed !' })
                    })
                    .catch(err => {
                        console.error(err)
                        res.send({ msg: 'OTP Generation Failed !' })
                    })
            } catch (e) {
                console.error(e)
                res.send({ msg: 'OTP Generation Failed !' })
            }

        }

    } catch (e) {
        console.error(e)
        res.status(500)
        res.send({ msg: 'Server Error !' })
    }
})

app.post('/otp', async (req, res) => {
    const { OTP } = req.body
    try {
        await client.connect()
        const db = client.db('tapwave')
        VerifyOTP(db, OTP)
            .then(response => {
                console.log(response)
                if (response) {
                    res.send({ msg: 'Regisration Successful !' })
                }
                else {
                    res.status(500)
                    res.send({ msg: 'Incorrect OTP !' })
                }
            })
            .catch(error => {
                console.error(error)
                res.status(500)
                res.send({ msg: 'Server Error !' })
            })

    } catch (e) {
        console.error(e)
        res.status(500)
        res.send({ msg: 'Server Error' })
    }
})


// GetOTP(db, firstName, lastName, password, phone_no)
//     .then(response => {
//         console.log(response)
//         if (response) res.send({ msg: 'OTP Generated Successfully !' })
//         else res.send({ msg: 'OTP Generation Failed !' })
//     })
//     .catch(error => {
//         console.error(error)
//         res.send({ msg: 'OTP Generation Failed !' })
//     })