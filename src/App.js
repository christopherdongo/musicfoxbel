import React from "react";
/*react-router-dom*/ 
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
/*context global*/
import { GlobalSoundState } from "./context/sound/SoundState";
import {GlobalUserState} from './context/user/UserState'
/*styled global*/ 
import {Global} from './styled/global' 
/*pages*/
import Home from './page/index';
import Signin from './page/signin';
import Signup from './page/signup';
import Error from './page/error';
import Recovery from './page/recovery';
/*route private*/
import RoutePrivate from './router/routerPrivate'; 


function App() {

  return (
    <>
    <GlobalUserState>
      <GlobalSoundState>
        <Global />
        <Router>
          <Switch>
             <Route exact path="/signin" component={Signin} />
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/recovery" component={Recovery} />
             <RoutePrivate exact path="/" component={Home}/>
             <Route  component={Error} />
          </Switch>
          
        </Router>
      </GlobalSoundState>
      </GlobalUserState>
    </>
  );
}


export default App;
