import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const username = JSON.parse(localStorage.getItem("username"));
const id = JSON.parse(localStorage.getItem("id"));

function MyComponent() {
  useEffect(() => {
    toast.success(username +', добро пожаловать на сайт!', {}); 
    toast.info('Ваш id:' + id ,  {}); 
  },[]);

    return (
      <div>
     
        <ToastContainer
        autoClose={10000}
        newestOnTop={false}
        pauseOnHover
        />
      </div>
    );
  };
  
export default MyComponent;