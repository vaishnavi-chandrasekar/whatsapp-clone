import React, { useState } from "react";
import db from "./firebase";
import "./Sidebarchat.css";
import {Link} from "react-router-dom"

function Sidebarchat() {
  return  (
   <>    
     <div className="sidebarchat">
        <i class="fas fa-user-circle"></i>

        <div className="sidebarchat_info">
          <h2>yes</h2>
          <p>hiii</p>
        </div>
      </div>
  
    <div  className="sidebarchat">
      
    </div>
    </>

  );
}

export default Sidebarchat;
