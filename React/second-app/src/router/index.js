
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';


export const privateRoutes = [
    { path: '/about', element: <About />},
    { path: '/posts', element: <Posts />},
    { path: '/posts/:params', element: <PostIdPage /> },
    { path: '*', element: <Posts />},
]

export const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/about', element: <About />},
    { path: '/posts', element: <Posts />},
    { path: '/posts/:params', element: <PostIdPage /> },
    { path: '*', element: <Login />},
]

{/* <Route path="/about" element={<About />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:params" element={<PostIdPage/>} />
    <Route path="*" element={<Posts />} /> */}