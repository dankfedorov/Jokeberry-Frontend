import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const username = JSON.parse(localStorage.getItem("username"));
const id = JSON.parse(localStorage.getItem("id"));
const role = JSON.parse(localStorage.getItem("roles"));

function MyComponent() {
  useEffect(() => {
    toast.success(username +', добро пожаловать на сайт!', {position: "top-right"}); 
    toast(<div className='very-small'>Ваш ID: {id}, {role} </div>); 
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