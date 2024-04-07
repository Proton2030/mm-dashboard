import axios from "axios"
import { log } from "console"

 export const getuserData=async({page,limit}:any)=>{
    try {
        const response=await axios.get(`http://65.1.183.77:8989/api/v1/user/get-all-user-suggestion?page=${page}&limit=${limit}`)
        return response
    } catch (error) {
        console.log(error)
    }
}