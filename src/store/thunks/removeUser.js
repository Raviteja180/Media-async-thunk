import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const removeUser = createAsyncThunk('users/remove',async(user)=>{
    // const response = await axios.delete(`ttp://localhost:3005/users/${user.id}`)
    await axios.delete(`http://localhost:3005/users/${user.id}`)

    return user;

    // return response.data;
    //the above return statement doesn't work because 
    //delete request will return empty in payload but to delete in reducer 
    //we need id or any reference of the user so we are returning user itself

})

export {removeUser};