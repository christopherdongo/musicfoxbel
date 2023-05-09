import React from "react";
/*react-router-dom*/ 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
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




const router = createBrowserRouter([
  {
    path:"/signin",
    element: <Signin />,
    errorElement:<Error />
    
  },
  {
    path:"/signup",
    element:<Signup />,
    errorElement:<Error />
  },
  {
    path:"/recovery",
    element:<Recovery />,
    errorElement:<Error />
  },{
    path:"/",
    element: <RoutePrivate ><Home /></RoutePrivate>,
    errorElement:<Error />
  }
])






function App() {

  return (
    <>
    <GlobalUserState>
      <GlobalSoundState>
        <Global />
        {/*<Router>
          <Switch>
             <Route exact path="/signin" component={Signin} />
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/recovery" component={Recovery} />
             <RoutePrivate exact path="/" component={Home}/>
             <Route  component={Error} />
          </Switch>
          
  </Router> */}
  <RouterProvider 
    router={router}
  />
      </GlobalSoundState>
      </GlobalUserState>
    </>
  );
}


export default App;
