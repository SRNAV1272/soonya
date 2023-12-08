import { NavLink } from "react-router-dom";


export default function Navlink() {
    const links = ['Pricing', 'About Us']
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
                                            color: `${isActive.isActive ? 'blue' : '#516A8B'}`,
                                            marginTop: `${window.innerWidth < 540 && '5px'}`,
                                            fontWeight: '600'
                                        }
                                    }
                                }
                                className={"Whisper"}
                            >
                                {item}
                            </NavLink>&emsp;&emsp;
                        </>
                    )
                })
            }
        </>
    )
}