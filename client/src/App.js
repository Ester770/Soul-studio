import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner, Image} from "react-bootstrap";
import {About} from "./pages/About";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <div class="text-center">
            <a href="/"><Image src={require('./images/Logo_soul.png').default} className="img-fluid m-3 mx-auto d-block lg-1 col-2"></Image></a>
            </div>
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
