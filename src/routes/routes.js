import {Home} from '../components/home/index'
import {Login} from '../components/login/index'
import {Registration} from '../components/registration/index'


export const routes = [
    {path: "/", element: <Home></Home>, exact: true},
    {path: "/home", element: <Home></Home>, exact: true},
    {path: "/login", element: <Login></Login>, exact: true},
    {path: "/registration", element: <Registration></Registration>, exact: true},
]