import React from 'react'
import "../assets/styles/smallfooter.css";


function Smallfooter() {
  return (
    <div>
         <div className="smallfooter white-bg small">
            <div className="row p-1">
            <div className="col-sm-2 "><strong>JOKEBERRY</strong> &copy; 2024-2025</div>
            <div className="col-sm-5 pull-right">
                <b>Frontend site </b><a href='https://dankfedorov-jokeberry-frontend-5c90.twc1.net' target='__blank' >https://dankfedorov-jokeberry-frontend-5c90.twc1.net</a> 
            </div>
            <div className="col-sm-5 pull-right">
            <b>Backend server</b> <a href='https://dankfedorov-server-9b2d.twc1.net/api/items' target='__blank'>https://dankfedorov-server-9b2d.twc1.net/api/items</a> 
            </div>
         
            </div>
            
            
        </div>
    </div>
  )
}

export default Smallfooter