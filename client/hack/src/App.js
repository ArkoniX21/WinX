import {Fragment, useState} from 'react'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Profile from "./Components/profile/Profile";
import Fetchdata from "./Utils/fetchdata";
import {CircularProgress} from "@mui/material";
// init({
//     callback:()=>{
//         alert(1)
//     }
//
// })
export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem("token") ?? "",
            nickname: "",
            id: "",
            created_rooms: [],
            img: "",
            isLoaded: false
        }
    }

    fetchdata = new Fetchdata()

    componentWillMount() {
        const tokenFromStorage = localStorage.getItem("token")
        this.fetchdata.check_user(tokenFromStorage).then(e => {
            console.log(e)
            if(e.success) {
                this.setState({
                    id: e?.data.id,
                    created: e?.data.created,
                    createdRooms: e?.data.createdRooms,
                    img: e?.data.img,
                    nickname: e?.data.nickname,
                    isLoaded: true,
                })
            }
        })
    }

    updateUserParams = (data) => {
        this.setState(data)
        localStorage.setItem("token", data.token)
    }

    render() {
        return (
            <div className="App">
                {!this.state.isLoaded ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                :
                    <Fragment>
                        <ButtonAppBar/>
                        <Routes>
                            <Route path='/register' element={<Register/>}/>
                            <Route path='/login' element={<Login setUser={this.updateUserParams}/>}/>
                            <Route path='/profile' element={<Profile user={this.state}/>}>
                                <Route path=":profileId" element={<Profile user={this.state}/>}/>
                            </Route>
                            <Route path="*" element={""}/>
                            <Route path="/" element={<Home/>}/>
                        </Routes>
                    </Fragment>
                }


            </div>
        )
    }

}

export const Home = () => {
    return <div>You are in Home page</div>
}
export const About = () => {
    return <div>This is the page where you put details about yourself</div>
}
export const NotFound = () => {
    return <div>This is a 404 page</div>
}



function ButtonAppBar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button onClick={() => navigate("/", {replace: true})} color="inherit">Main</Button>
                    <Button onClick={() => navigate("/login", {replace: true})} color="inherit">Login</Button>
                    <Button onClick={() => navigate("/register", {replace: true})} color="inherit">Register</Button>
                    <Button onClick={() => navigate("/profile/", {replace: true})} color="inherit">Profile</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
