
/*import {useNavigate} from "react-router-dom";
import React from 'react'
import Fetchdata from "../../Utils/fetchdata";
import {useEffect, useState} from "react";

export default function Login({setUser}) {
    const fetchdata = new Fetchdata()
    const navigate = useNavigate();

    const [login, setLogin] = useState(() => {
        return {
            email: "",
            password: ""
        }
    })

    const [isMessage, setMessageVisible] = useState(false)
    const [message, setMessage] = useState('')

    const changeInputLogin = event => {
        event.persist()
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    useEffect(() => {
        // Specify how to clean up after this effect:
        return function cleanup() {
            clearInterval()
        };
    });

    const log = () => {
        fetchdata.login(login).then(r => {
            console.log(r)
            if (r?.success) {
                setMessage(r.message)
                setMessageVisible(true)
                setUser({
                    token: r.token,
                    nickname: r.response_user.nickname,
                    id: r.response_user.id,
                    created_rooms: r.response_user.created_rooms,
                    img : r.response_user?.img
                })
                redirect()
                //setInterval(redirect, 1000)
            } else {
                setMessage(r.message ? r.message : 'РћС€РёР±РєР° СЃРµСЂРІРµСЂР°')
                setMessageVisible(true)
            }

        })
    }

    const redirect = () => {
        navigate("/profile/", {replace: true})
    }

    return (
        <div className="reg-container">
            <Typography variant="h4" gutterBottom component="div">
                Р’С…РѕРґ РІ Р°РєРєР°СѓРЅС‚
            </Typography>
            <TextField id="standard-basic"
                       label="РџРѕС‡С‚Р°"
                       variant="standard"
                       name={"email"}
                       value={login.email}
                       onChange={changeInputLogin}
            />
            <TextField id="standard-basic"
                       label="РџР°СЂРѕР»СЊ"
                       variant="standard"
                       type="password"
                       name={"password"}
                       value={login.password}
                       onChange={changeInputLogin}
            />
            <Button variant="contained" onClick={() => log()}>Р’РѕР№С‚Рё</Button>
            <div className="reg-container-text">
                <Typography variant="subtitle1" gutterBottom component="div">
                    РќРµС‚ Р°РєРєР°СѓРЅС‚Р°?
                </Typography>
                <Button onClick={() => navigate("/register", {replace: true})}>РЎРѕР·РґР°Р№С‚Рµ</Button>
            </div>
            {isMessage &&
                <Typography variant="subtitle1" gutterBottom component="div">
                    {message}
                </Typography>
            }

        </div>
    )
}