import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Navlink(props) {
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
                            </NavLink>&emsp;
                        </>
                    )
                })
            }
            <Button
                onClick={() => props.Shop()}
            >
                <ShoppingBagIcon sx={{ fontSize: '30px', color: '#516A8B' }} />
            </Button>
        </>
    )
}