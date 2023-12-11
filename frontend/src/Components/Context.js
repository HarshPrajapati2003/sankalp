import React, { createContext, useState } from 'react'
import { useForm } from "react-hook-form";
const UserContext = createContext() 
const UserProvider= ({children}) => {
    // const [count,setCount]=useState(0)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const [user,setUser] = useState({Name:"",Amount:"",Email:"",Phone:"",Reciept:false})
  const [reciept, setReciept] = useState(false)
  const contextValue = {
    register,
    handleSubmit,
    user,
    setUser,
    reciept,
    setReciept,
  };
return (
  <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
);
}
export {UserContext,UserProvider}