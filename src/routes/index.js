import Home from '../pages/Home'
import Following from '../pages/Following'
// Public
const publicRouter = [ 
    { path:'/', component: Home},
    { path:'/Following', component: Following},
]
const privateRouter = [ 

]
export {privateRouter, publicRouter}
