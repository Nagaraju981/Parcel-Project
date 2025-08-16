
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import About from './Components/About'
import Error from './Components/Error'
import Contact from './Components/Contact';
import RestaurantInfo from './Components/RestaurantInfo';
import { lazy, Suspense } from 'react';

const AppLayout = () => {
    return (
        <div className='app-layout'>
            <Header />
            <Outlet />
            
        </div>
    )
}
const About = lazy(()=>import('./Components/About'))
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/About',
                element: <Suspense fallback={<div>Loading ...</div>}><About /></Suspense>
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Restaurant/:resId',
                element: <RestaurantInfo />
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)