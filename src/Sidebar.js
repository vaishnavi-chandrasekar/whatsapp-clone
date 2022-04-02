import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import fontAwesome from "fontawesome";
import Sidebarchat from "./Sidebarchat";
import db from "./firebase";
// import { Avatar } from "material-ui/core";
// import DonutLargeIcon from "@material-ui/icons/DonutLarge";
// import ChatIcon from "@material-ui/icons/Chat";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

function Sidebar() {
  
 
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <i class="fas fa-user-circle"></i>
          <div className="sidebar__headerRight">
            <i class="fas fa-comment-alt"></i>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </div>
        <div className="sidebar__search"></div>
        <div className="sidebar__container">
          <i class="fa fa-search" aria-hidden="true">
           
            <input type="text" placeholder="search or start new chat"></input>
          </i>
        </div>
        <div className="sidebar_chats">
          <Sidebarchat />
        
        
        </div>
      </div>
    </>
  );
}

export default Sidebar;
