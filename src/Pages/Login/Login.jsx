import styles from './Login.module.css'
import logo from "../../assets/logo.png";
import {Input,Button} from "antd"
import { useState } from 'react';

const Login = () =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");    
    
    const onSubmit = (event)=>{
        console.log(event);
        event.preventDefault();
    }

    return <div className={styles.container}>
        <div className={styles.login_box}>
           <div className={styles.logo_container}>
              <img  className={styles.logo} src={logo} alt=''/>
           </div>
           <div className={styles.form_controls}>
                  <div className={styles.form_control}>
                      <Input size='large' placeholder='Username' value={username} />
                  </div>
                  <div className={styles.form_control}>
                      <Input size='large' placeholder='Password' value={password} />
                  </div>
           </div>
           <div className={styles.form_actions}>
              <div className={styles.form_actions}>
                 <Button size='large' className={styles.log_in_button} onClick={onSubmit}>Log In</Button>
              </div>
           </div>
        </div>
    </div>
}

export default Login;