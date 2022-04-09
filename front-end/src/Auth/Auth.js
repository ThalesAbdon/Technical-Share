// import  React from "react";
// import PropsTypes from 'prop-types';
import { Navigate} from "react-router-dom";


// function RouterWrapper({
//     redirectTo, isPrivate, component: Component, ...rest
// }){

//     const authenticaded = localStorage.getItem('token');

//     if(!authenticaded && isPrivate) return <Navigate to={redirectTo} />;

//     return <Route {...rest} render={ props => <Component {...props} /> } />;
// }


// RouterWrapper.prototype = {
//     redirectTo: PropsTypes.string,
//     isPrivate: PropsTypes.bool,
//     component: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.func])
//     .isRequired,
// };


// RouterWrapper.defaultProps = {
//     redirectTo: '/login',
//     isPrivate: false
// };


// export default RouterWrapper;


function Auth(){
   const token = localStorage.getItem("token")
   if(token){
       
   }else{
       return <Navigate to="/login" />
   }


}

export default Auth;