import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { publicRouter } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                {
                publicRouter.map((router,index) =>{
                    const Layout = router.layout === null ? Fragment : DefaultLayout;
                    const Page = router.component;
                    return <Route key={index} path={router.path} element={<Layout><Page/></Layout>} />;
                })}     
                </Routes>
            </div>
        </Router>
    );
}

export default App;
