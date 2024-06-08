import logo from './logo.svg';
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Err404 from './Err404';
import Navbar from './components/Navbar';


function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element: <Home/>     
    },
    {
      path :  '/404',
      element : <Err404/>
    }
  ])


  return (
    <div>
      <Navbar/>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
