import axios from 'axios'
const rootUrl="http://localhost:8000/api/v1"
const apiProcessor= async({method,url,data})=>{
try {
    const response=await axios({
        method,
        url,
        data
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
