import HeaderOnly from '../components/Layout/HeaderOnly';
//Layout
import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Search from '../pages/Search'
// Public
const publicRouter = [ 
    { path:'/', component: Home},
    { path:'/following', component: Following},
    { path:'/profile', component: Profile},
    // layout : null : do not layout , render another layout
    { path:'/upload', component: Upload, layout: HeaderOnly},
    { path:'/search', component: Search, layout: null},
]
const privateRouter = [ 

]
export {privateRouter, publicRouter}
