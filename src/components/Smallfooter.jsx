import React from 'react'
import "../assets/styles/smallfooter.css";


function Smallfooter() {
  return (
    <div>
         <div className="smallfooter white-bg small">
            <div className="row p-1">
            <div className="col-sm-2 "><strong>JOKEBERRY</strong> &copy; 2024-2025</div>
            <div className="col-sm-5 pull-right">
                <b>Frontend site </b><a href='https://jokeberry.netlify.app' target='__blank' >https://jokeberry.netlify.app</a> 
            </div>
            <div className="col-sm-5 pull-right">
            <b>Backend server</b> <a href='http://188.130.154.26:5000/api/items' target='__blank'>http://188.130.154.26:5000/api/items</a> 
            </div>
         
            </div>
            
            
        </div>
    </div>
  )
}

export default Smallfooter