import requestHelper from "../requestHelper";

const storeToken = (token) => {
  localStorage.setItem("jwt",token);
}

const setCurrentUserId=(userId)=>{
  localStorage.setItem("userId",userId);
}

const retrieveToken =()=>{
 return localStorage.getItem("jwt");
}

const getCurrentUserId=()=>{
  return parseInt(localStorage.getItem("userId"));
 }

const isLoggedIn=()=>{
  const userId = getCurrentUserId();
  const token = retrieveToken();
  return (token!==null)&&(!token!=="")&&(userId!==0)&&(!isNaN(userId));
}

const setCurrentUser=(userId)=>{
  const response = requestHelper.getRequest(`/users/${userId}`);
  response.then(res=>{
    if(res.status === 200)
       window.CurrentUser = res.data
  })
}

const sessionHelper = {
    storeToken,
    retrieveToken,
    isLoggedIn,
    getCurrentUserId,
    setCurrentUser,
    setCurrentUserId
}
export default sessionHelper;