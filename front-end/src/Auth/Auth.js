
import { Navigate} from "react-router-dom";


function Auth(){
   const token = localStorage.getItem("token")
   if(token){
       
   }else{
       return <Navigate to="/login" />
   }


}

export default Auth;