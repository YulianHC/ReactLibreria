import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoadin,startLoading } from "./ui";
import Swal from 'sweetalert2'



export const startloginEmailPassword=(email,password)=>{


    return (dispatch) =>{


        dispatch(startLoading());


        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) =>{

            dispatch(login(user.uid, user.displayName));

            dispatch(finishLoadin());
                
            
        })
        .catch(e => {
            console.log(e);
            dispatch(finishLoadin());
            Swal.fire('Error',e.message, 'error');
        })
       
//dispatch (login(123, 'pedro'))
    }
}
export const startRegisterWithEmailPasswordName =(email,password,name)=>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async({user}) =>{
            await user.updateProfile({displayName:name});
            console.log(user);
            dispatch(
                login(user.uid, user.displayName)
            );
            
        })
        .catch(e => {
            console.log(e);
            Swal.fire('Error',e.message, 'error');
        })
    }
}

export const starGoogleLogin =()=>{
    return (dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) =>{
            dispatch(
                login(user.uid, user.displayName)
            )
        });
    }
}

export const  login =(uid,displayName)=>({

    type:types.login,
    payload:{
        uid,
        displayName
    }
});

export const startLogout=()=>{
    return async (dispatch)=>{
await firebase.auth().signOut();
dispatch(logout());    
}
}

export const logout = ()=> ({
    type:types.logouth
})