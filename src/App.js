import { useState } from 'react';
import './App.css';
import ProtectedRoutes from './components/ProtectedRoute/ProtectedRoute';
import LoginView from './views/Login/LoginView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import sessionHelper from './helpers/authHelper/sessionHelper';
import mapping from './ViewRouteMappings';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(sessionHelper.isLoggedIn());

  const loginHandler = (flag) =>{
     setIsLoggedIn(flag);
  }

  if(isLoggedIn){
    sessionHelper.setCurrentUser(sessionHelper.getCurrentUserId());
  }
  
  return (
    <div className="App">
      <div className="container">
         <BrowserRouter>
            <Routes> 
              {
                mapping.map(obj=>
                  <Route  key={obj.path+"_path"} path={obj.path} element={ <ProtectedRoutes isLoggedIn={isLoggedIn} component={obj.component}/> }/>
                )
              } 
              <Route path='/login' element={<LoginView onLogin={loginHandler} isLoggedIn={isLoggedIn} />}/>
            </Routes>
         </BrowserRouter>
         </div>
    </div>
  );
}

export default App;
