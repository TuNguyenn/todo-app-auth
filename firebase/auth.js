import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";

const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authStateChanged = async (user) => {
    
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, authStateChanged) 
  },[])
}

const AuthUserProvider = ({ children }) => {
  return (
    <AuthUserContext.Provider value={{}}>{children}</AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
