import requestHelper from "../requestHelper";

const makeLoginRequest = (data)=>{
     const url = "/auth/authenticate"
     const res = requestHelper.postRequest(url,data);
     return res;
}

const loginHelper ={
   makeLoginRequest,
}

export default loginHelper;