import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import Teachers from "../pages/Teachers";
import MyProfile from "../pages/MyProfile";
import SignUp from "../pages/SignUp";

export const privateRoutes = [
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/profile', element: <MyProfile/>},
]

export const publicRoutes = [
    {path: '/', element: <MainPage/>},
    {path: '/login', element: <Login/>},
    {path: '/register', element: <SignUp/>},
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/teachers', element: <Teachers/>},
    {path: '/*', element: <Login/>},
]