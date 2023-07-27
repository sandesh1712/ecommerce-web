import styles from './Login.module.css'
import logo from "../../assets/logo.png";
import {Input,Button} from "antd"

const Login = () =>{
     
    return <div className={styles.container}>
        <div className={styles.login_box}>
           <div className={styles.logo_container}>
              <img  className={styles.logo} src={logo}/>
           </div>
           <div className={styles.form_controls}>
                  <div className={styles.form_control}>
                      <Input size='large' placeholder='Username'/>
                  </div>
                  <div className={styles.form_control}>
                      <Input size='large' placeholder='Password'/>
                  </div>
           </div>
           <div className={styles.form_actions}>
              <div className={styles.form_actions}>
                 <Button size='large' className={styles.log_in_button}>Log In</Button>
              </div>
           </div>
        </div>
    </div>
}

export default Login;