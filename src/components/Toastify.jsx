import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Toastify() {
  const username = JSON.parse(localStorage.getItem("username"));
  const id = JSON.parse(localStorage.getItem("id"));

  const notify = () => toast(username +", пожалуйста ожидайте...");
  // <span className="very-small">Username:{username}</span>

 
  return (
    <div>
      <div>
        {/* <span>{notify}</span> */}
        <button  onClick={notify} className=''>обновить<i class="bi bi-arrow-clockwise "></i></button> 
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
// pauseOnFocusLoss
draggable
// pauseOnHover
theme="light"
/>
        
      </div>
    </div>
  );
}

export default Toastify;
