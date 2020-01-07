import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Menu from '../pages/Menu';
import Beranda from '../pages/Beranda';
import LoginScreen from '../pages/LoginScreen';
import Nota from '../pages/Nota';
import Order from '../pages/Order';
import Outlet from '../pages/Outlet';
import Profile from '../pages/Profile';

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "menu" component = {Menu} title = "Menu"/>
            <Scene key = "beranda" component = {Beranda} title = "Beranda" />
            <Scene key = "login" component = {LoginScreen} title = "Login" initial = {true}  />
            <Scene key = "nota" component = {Nota} title = "Nota" />
            <Scene key = "order" component = {Order} title = "Order" />
            <Scene key = "outlet" component = {Outlet} title = "Outlet" />
            <Scene key = "profile" component = {Profile} title = "Profile" />
        </Scene>
    </Router>
)
export default Routes
