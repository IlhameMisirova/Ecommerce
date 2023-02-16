import * as yup from "yup";

const  passwordRules=/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;
      
const emailRules=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 



export const basicSchema = yup.object().shape({
    email: yup.string().matches(emailRules,{message:"please enter a valid email"}).required("required"),
    password: yup.string().min(6).matches(passwordRules,{message:"please create a stronger password"}).required("required"),
    fullname:yup.string().min(6).required("required"),
    phone:yup.number().min(8).required("required")
})

export const loginSchema = yup.object().shape({
    email: yup.string().matches(emailRules,{message:"please enter a valid email"}).required("required"),
    password: yup.string().min(6).matches(passwordRules,{message:"please create a stronger password"}).required("required"),
})