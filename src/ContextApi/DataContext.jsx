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
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

//Data Context Components
const DataContext = ({ children }) => {
  //States
  const [activeUser, setActiveUser] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRoleLoading, setIsRoleLoading] = useState(true)

  //Getting Database User
  const axiosSecure = useAxiosSecure();
  const [dbUserData, setDbUserData] = useState(null);
  const { isLoading, error, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/get/user?email=${activeUser?.email}`
      );
      const userData = await response.data[0]
      setDbUserData(userData);
      setIsRoleLoading(false)
      return response.data;
    },
  });
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
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setActiveUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

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
    dbUserData
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
