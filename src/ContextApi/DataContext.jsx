import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
//Global Data Sending Context
export const GlobalDataContext = createContext(null);

//Google Login Auth Info
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

//Firebase Auth
import { auth } from "../Config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getUserRole } from "../Hooks/getUserRole";

//Data Context Components
const DataContext = ({ children }) => {
  //States
  const [activeUser, setActiveUser] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeUserRole, setActiveUserRole] = useState(null);
  const [activeUserId, setActiveUserId] = useState(null);



  //Create User Email & Pass Func
  const createEmailUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //Login With Email And Password
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update User Info Image, Name etc..
  const userInfoUpdate = (name, image) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  //Logout User
  const userLogout = () => {
    signOut(auth);
  };

  //Watch User

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setActiveUser(currentUser);
      //get user role
      const getUserRoleData = async (email) => {
        const result = await getUserRole(email);
        setActiveUserRole(result?.role);
        setActiveUserId(result?._id);
      };

      getUserRoleData(currentUser.email);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  
  console.log("user role result", activeUserRole, activeUserId);
  //Global Data Export
  const globalDataVariable = {
    createEmailUser,
    googleLogin,
    loginWithEmail,
    activeUser,
    userLogout,
    userInfoUpdate,
    setUserPhoto,
    userPhoto,
    loading,
    activeUserId,
    activeUserRole
  };
  return (
    <GlobalDataContext.Provider value={globalDataVariable}>
      {children}
    </GlobalDataContext.Provider>
  );
};
DataContext.propTypes = {
  children: PropTypes.node,
};
export default DataContext;
