import styles from './LoginView.module.css'
import logo from "../../assets/logo.png";
import {Input,Button} from "antd"
import {useState } from 'react';
import loginHelper from '../../helpers/authHelper/loginHelper';
import sessionHelper from '../../helpers/authHelper/sessionHelper';

const Login = ({onLogin,isLoggedIn}) =>{   
    if(isLoggedIn)
      window.location.href ="/home"        
    
      const [username,setUsername] = useState("");
    const [password,setPassword] = useState(""); 
    
    const onUsernameChange =(event)=>{
        setUsername(event.target.value);
    }

    const onPasswordChange =(event)=>{
        setPassword(event.target.value);
    }

    const login = (data)=>{
        loginHelper.makeLoginRequest(data).then(response=>{
            if(response.status===200){
                const {token,userId} = response.data;
                sessionHelper.storeToken(token);
                sessionHelper.setCurrentUserId(userId);
                sessionHelper.setCurrentUser(userId);
                onLogin(true);
            }else{
                alert(response.data.message)
            }
        });
    }
    
    const onSubmit = (event)=>{
        console.log(event);
        event.preventDefault();
        login({
            username,
            password
        })
    }

    return <div className={styles.container}>
        <div className={styles.login_box}>
           <div className={styles.logo_container}>
              <img  className={styles.logo} src={logo} alt=''/>
           </div>
           <div className={styles.form_controls}>
                  <div className={styles.form_control}>
                      <Input size='large' type='text' placeholder='Username' value={username} onChange={onUsernameChange}/>
                  </div>
                  <div className={styles.form_control}>
                      <Input size='large' type='password' placeholder='Password' value={password} onChange={onPasswordChange}/>
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