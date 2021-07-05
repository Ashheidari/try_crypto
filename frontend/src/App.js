import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React,{useState,useCallback} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TryCryptoLanding from "./pages/TryCryptoLanding.js";
import TryCryptoSignUp from "./pages/TryCryptoSignUp.js"
import TryCryptoLogIn from "./pages/TryCryptoLogin.js"
import TryCryptoPricingPage from "./pages/TryCryptoPricing.js"
import TryCryptoAboutUs from "./pages/TryCryptoAboutUs.js"
import TryCryptoContactUs from "./pages/TryCryptoContactUs.js"
import TryCryptoCheckOut from "./pages/TryCryptoCheckOut.js"
import AuthContext from "./context/auth-contex"



 const App= ()=> {
    // return <AnimationRevealPage disabled></AnimationRevealPage>;
  const [isLoggedIn, setIsLoggedIn]=useState(false)

  const login = useCallback(()=>{
  setIsLoggedIn(true)
})

  const logout = useCallback(()=>{
  setIsLoggedIn(false)
})
    return (
      <AuthContext.Provider value={isLoggedIn,login,logout}>
      <Router>
        <Switch>
          <Route path="/checkout" >
            <TryCryptoCheckOut />
          </Route>
          <Route path="/contact-us" >
            <TryCryptoContactUs />
          </Route>
          <Route path="/about" >
            <TryCryptoAboutUs />
          </Route>
          <Route path="/signup" >
            <TryCryptoSignUp />
          </Route>
          <Route path="/login">
            <TryCryptoLogIn />
          </Route>
          <Route path="/pricing">
            <TryCryptoPricingPage />
          </Route>
          <Route path="/"  >
            <TryCryptoLanding />
          </Route>
        </Switch>
      </Router>
      </AuthContext.Provider>
    );
  }


  export default App