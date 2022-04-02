import {useState,useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import axios from "./axios";
import db from './firebase';
import firebase from './firebase';
import {useStateValue} from './StateProvider'

function Chat( {messages}) {

  const [input,setInput] = useState('');

  const sendMessage = async (e) =>{
    e.preventDefault();

   await axios.post("/messages/new", {
      message:input,
      name:"demo app",
      timestamp:"justnow",
      received:true,
    });
    setInput("")
  }
  return (
    <div className='chat'>
      <div className='chat__header'>
      <i class="fas fa-user-circle"></i>
      <div className='chat__headerinfo'>
          <h3>mam</h3>
          <p>Last seen...</p>
      </div>
      <div className='chat__headerRight'>
      <i class="fa fa-search" aria-hidden="true"></i>
      <i class="fa fa-paperclip"></i>
      <i class="fa fa-ellipsis-v"></i>
 

      </div>
      </div>
      <div className='chat__body'>
        {messages.map((message)=>(
              <p className={`chat__message ${message.received && "chat__receiver"}`}>
              <span className='chat__name'>{message.name}</span>
             {message.message}
              <span className='chat__timestamp'>
                  {message.timestamp}
              </span>
              </p>
        ))}

          


          </div>
          <div className='chat__footer'>
              <form>
          <i class="fas fa-smile"></i>

          <input type="text" value={input} onChange ={e=>setInput(e.target.value)}  placeholder='Type a message'></input>
          <button type="submit" onClick={sendMessage}>send a message</button>
          <i class="fa-solid fa-microphone"></i>
          </form>
          </div>
      
    </div>
  )
}

export default Chat
