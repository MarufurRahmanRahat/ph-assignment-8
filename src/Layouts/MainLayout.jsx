import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div  className='flex flex-col min-h-screen'>
            <Navbar />
             <div className='max-w-screen-2xl w-full flex-1 bg-[#F5F5F5]'>
                <Outlet />
             </div>
            <Footer />
            <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
           
        </div>
    );
};

export default MainLayout;