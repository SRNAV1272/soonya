import { NavLink } from "react-router-dom";


export default function Navlink() {
    const links = ['Features', 'Pricing', 'About Us', 'Resources', 'Enterprise']
    return (
        <>
            {
                links.map((item, id) => {
                    return (
                        <>
                            <NavLink
                                key={id}
                                to={`/${item}`}
                                style={
                                    (isActive) => {
                                        console.log(isActive)
                                        return {
                                            textDecoration: 'none',
                                            color: `${isActive.isActive ? 'blue' : 'grey'}`,
                                            marginTop: `${window.innerWidth < 540 && '5px'}`
                                        }
                                    }
                                }
                                className={"Whisper"}
                            >
                                {item}
                            </NavLink>
                        </>
                    )
                })
            }
        </>
    )
}