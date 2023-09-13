import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
// Public
const publicRouter = [ 
    { path:'/', component: Home},
    { path:'/following', component: Following},
    { path:'/profile', component: Profile},
    // layout : null : do not layout , render another layout
    { path:'/upload', component: Upload, layout: null},
]
const privateRouter = [ 

]
export {privateRouter, publicRouter}
