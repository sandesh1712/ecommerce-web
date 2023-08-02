import sessionHelper from "./sessionHelper";

const buildHeaders = ()=>{
    const headers ={
      'Content-Type': 'application/json',
      'accept': 'application/json',
    }     
    if(sessionHelper.isLoggedIn()){
        headers.authorization = `Bearer ${sessionHelper.retrieveToken()}`
    }
    return headers;
}

const headerHelper = {
    buildHeaders
}

export default headerHelper;