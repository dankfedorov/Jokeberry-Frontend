import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const username = JSON.parse(localStorage.getItem("username"));
const id = JSON.parse(localStorage.getItem("id"));
const role = JSON.parse(localStorage.getItem("roles"));

function MyComponent() {
  useEffect(() => {
    // toast.success(username  + ' (ID:'+ id + '),  обновление данных...', {position: "top-right"}); 
    toast.success(username  + ' (ID:'+ id + '),  обновление данных...', {position: "top-right"}); 
    toast.info(<div className='very-small'>Ваш ID: {id}, {role} </div>); 
   },[]);

    return (
      <div>
     
        <ToastContainer
        autoClose={3000}
        newestOnTop={false}
        pauseOnHover={false}
        />
      </div>
    );
  };
  
export default MyComponent;