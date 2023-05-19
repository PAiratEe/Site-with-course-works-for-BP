import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import Teachers from "../pages/Teachers";
import MyProfile from "../pages/MyProfile";
import SignUp from "../pages/SignUp";
import CourseWorkId from "../pages/CourseWorkId";
import CourseWorks from "../pages/CourseWorks";
import CourseWorkForm from "../pages/CourseWorkForm";
import CourseWorkEditor from "../pages/CourseWorkEditor";
import TeacherId from "../components/TeacherId";

export const privateRoutes = [
    {path: '/profile', element: <MyProfile/>},
    {path: '/createcoursework', element: <CourseWorkForm/>},
    {path: '/editcoursework/:id', element: <CourseWorkEditor/>},
]

export const publicRoutes = [
    {path: '/', element: <MainPage/>},
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/courseworks', element: <CourseWorks/>},
    {path: '/courseworks/:id', element: <CourseWorkId/>},
    {path: '/teachers', element: <Teachers/>},
    {path: '/teachers/:id', element: <TeacherId/>},
    {path: '/*', element: <MainPage/>},
]

export const logRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/register', element: <SignUp/>},
]