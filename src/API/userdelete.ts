import axios from "axios";

export const deleteUser=async({id}:any)=>{
    
  try {
    const response= await axios.delete(``,id)
    return response
  } 
  catch (error) {
    console.log(error)
  }
}