import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import Teachers from "../pages/Teachers";
import MyProfile from "../pages/MyProfile";
import SignUp from "../pages/SignUp";

export const privateRoutes = [
    {path: '/profile', element: <MyProfile/>},
]

export const publicRoutes = [
    {path: '/', element: <MainPage/>},
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/teachers', element: <Teachers/>},
    {path: '/*', element: <MainPage/>},
]

export const logRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/register', element: <SignUp/>},
]