import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
// Public
const publicRouter = [ 
    { path:'/', component: Home},
    { path:'/following', component: Following},
    { path:'/profile', component: Profile},
]
const privateRouter = [ 

]
export {privateRouter, publicRouter}
