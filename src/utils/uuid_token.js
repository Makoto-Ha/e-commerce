import {v4 as uuidv4} from 'uuid';
let uuidtoken = localStorage.getItem('UUID_TOKEN'); 
if(!uuidtoken) {
  uuidtoken = uuidv4();
  localStorage.setItem('UUID_TOKEN', uuidtoken);
}

export default uuidtoken;