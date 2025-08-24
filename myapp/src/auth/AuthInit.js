import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setCurrentUser, setLoggedIn, setToken } from '../redux/UserSlice';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthInit = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasShownLoginToast = useRef(false);

  useEffect(() => {
    const token = localStorage.getItem("cas-token");

    if (token) {
      try {
        const decoded = jwtDecode(token);

        if (decoded.exp * 1000 > Date.now()) {
          dispatch(setLoggedIn(true));
          dispatch(setToken(token));
          dispatch(setCurrentUser(jwtDecode(token)));
          if (!hasShownLoginToast.current) {
            toast.success("Logged In!");
            hasShownLoginToast.current = true;
          }
        } else {
          localStorage.removeItem("cas-token");
          dispatch(setCurrentUser({}));
          dispatch(setToken(''));
          dispatch(setLoggedIn(false))
          toast.error('Session Expired!')
        }
      } catch (err) {
        dispatch(setCurrentUser({}));
        dispatch(setToken(''));
        dispatch(setLoggedIn(false))
        toast.error('Client Error!')
      }
    }
    else{
        dispatch(setCurrentUser({}));
        dispatch(setToken(''));
        dispatch(setLoggedIn(false))
    }
  }, [dispatch,navigate]);

  return null;
}

export default AuthInit;