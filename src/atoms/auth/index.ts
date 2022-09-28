import { atom } from "recoil";

const AuthStatus = atom({
  key: "AuthStatus",
  default: {
    isAuth: false,
    tokenApi: "",
    tokenExpire: "",
  },
});

export default AuthStatus;
