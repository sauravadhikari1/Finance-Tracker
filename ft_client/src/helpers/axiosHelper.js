import axios from 'axios'
const rootUrl="http://localhost:8000/api/v1"

const getAccessJWT=()=>{
    return localStorage.getItem("accessJWT")
}

const apiProcessor= async({method,url,data,headers})=>{
try {
    const response=await axios({
        method,
        url,
        data,
        headers
    })
    return response.data
} catch (error) {
    return{
        status:"error",
        message:error.message
    }
}
}

//post new user

export const postNewUser=(data)=>{
    const obj={
        method:"post",
        url:rootUrl+"/users",
        data,
    }
    return apiProcessor(obj)
}


//login user
export const loginUser=(data)=>{
    const obj={
        method:"post",
        url:rootUrl+"/users/login",
        data,
    }
    return apiProcessor(obj)
}

//get user 
export const getUser=()=>{
    const obj={
        method:"get",
        url:rootUrl+"/users",
        headers:{
            Authorization:getAccessJWT()
        },
    }
    return apiProcessor(obj)
}

