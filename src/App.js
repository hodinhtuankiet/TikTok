import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { publicRouter } from './routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                {publicRouter.map((router,index) =>{
                    const Page = router.component
                    return <Route key={index} path={router.path} element={<Page/>} />
                })}     
                </Routes>
            </div>
        </Router>
    );
}

export default App;
