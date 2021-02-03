

/*page*/ 
import Home from '../page/index';
import Signin from '../page/signin';
import Signup from '../page/signup'
import Music from '../page/music';


export const router = [
    {
        path:"/",
        exact:false,
        routes:[
            {
                path:"/",
                component:Home,
                exact:true
            },
            {
                path:"/signin",
                components: Signin,
                exact:true
            },
            {
                path:"/signup",
                components:Signup,
                exact:true
            }
        ]

    }
]


export default routes