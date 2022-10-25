import React from 'react'
import Logo from '../img/logo.png'
import { MdShoppingBasket } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config'
import Avatar from '../img/avatar.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

  const firebaseAuth= getAuth(app);
  const provider= new GoogleAuthProvider();

  const [{user},dispatch]= useStateValue();

  const login = async() =>{

    if(!user){
      const {user :{refreshToken,providerData}}= await signInWithPopup(firebaseAuth,provider)
    dispatch({
      type:actionType.SET_USER,
      user:providerData[0],
    })
    localStorage.setItem('user',JSON.stringify(providerData[0]))
    }
    



// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
 
  }
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop and tablet*/}
      <div className='hidden md:flex w-full h-full items-center justify-between '>
        
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt="logo" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className="flex items-center gap-8">
        <ul className='flex items-center gap-8 '>
        <li className='text-base text-textColor hover:text-headnigColor duation-100
          transition-all ease-in-out cursor-pointer'>Home</li>
          <li className='text-base text-textColor hover:text-headnigColor duation-100
          transition-all ease-in-out cursor-pointer'>Menu</li>
          <li className='text-base text-textColor hover:text-headnigColor duation-100
          transition-all ease-in-out cursor-pointer'>About Us</li>
          <li className='text-base text-textColor hover:text-headnigColor duation-100
          transition-all ease-in-out cursor-pointer'>Service</li>
        
        </ul>
     
      <div className='relative flex items-center justify-center'>
        <MdShoppingBasket className='text text-textColor text-2xl ml-8 cursor-pointer'/>
        <div className='absolute -right-2 -top-2 w-5 h-5  rounded-full bg-cartNumBg flex items-center justify-center'>
          <p className='text-xs text-white font-semibold'>2</p>

        </div>
      </div>  
      <div className='relative'>
      <motion.img 
      whileTap={{scale:0.6}}
      src={user ? user.photoURL : Avatar} 
      className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
       alt="userprofile"
       onClick={login}
       />
       <div className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute'>
        <p>New Item</p>
        <p>Logout</p>
       </div>
       </div>
      </div>
      </div>
      {/* mobile */}


      <div className='flex md:hidden w-full h-full'></div>
    </header>
  )
}

export default Header