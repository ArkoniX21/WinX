
/*import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Fetchdata from "../../Utils/fetchdata";

export default function Registration() {

    const fetchdata = new Fetchdata()
    const navigate = useNavigate();

    const [register, setRegister] = useState(() => {
        return {
            nickname: "",
            email: "",
            password: ""
        }
    })
    const [isMessage, setMessageVisible] = useState(false)
    const [message, setMessage] = useState('')

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
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

    const reg = () => {
        fetchdata.register(register).then(r => {
            if (r?.success) {
                setMessage(r.message)
                setMessageVisible(true)
                redirect()
                //setInterval(redirect, 1000)
            } else {
                setMessage(r.message ? r.message : 'Ошибка сервера')
                setMessageVisible(true)
            }

        })
    }

    const redirect = () => {
        navigate("/login", {replace: true})
    }

    return (
        <div className="reg-container">
            <Typography variant="h4" gutterBottom component="div">
                Создание аккаунта
            </Typography>
            <TextField
                id="standard-basic"
                label="Почта"
                variant="standard"
                name="email"
                value={register.email}
                onChange={changeInputRegister}
            />
            <TextField
                id="standard-basic"
                label="Псевдоним"
                variant="standard"
                name="nickname"
                value={register.nickname}
                onChange={changeInputRegister}
            />
            <TextField
                id="standard-basic"
                label="Пароль"
                variant="standard"
                name="password"
                value={register.password}
                type="password"
                onChange={changeInputRegister}
            />
            <Button onClick={() => reg()} variant="contained">Создать</Button>
            <div className="reg-container-text">
                <Typography variant="subtitle1" gutterBottom component="div">
                    Уже есть аккаунт?
                </Typography>
                <Button onClick={() => navigate("/login", {replace: true})}>Войдите</Button>
            </div>

            {isMessage &&
                <Typography variant="subtitle1" gutterBottom component="div">
                    {message}
                </Typography>
            }

        </div>
    )
}

