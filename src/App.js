import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutMe from './component/AboutMe/AboutMe';
import ContactMe from './component/ContactMe/ContactMe';
import Home from './component/Home/Home/Home';
import Main from './component/Layout/Main';
import Project from './component/Projects/Project';
import Skill from './component/Skill/Skill';
const router = createBrowserRouter([
  {
    path: '/',
    element : <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/skill',
        element : <Skill></Skill>
      },
      {
        path : '/projects',
        element : <Project></Project>
      },
      {
        path : '/aboutMe',
        element : <AboutMe></AboutMe>
      },
      {
        path : '/contactMe',
        element : <ContactMe></ContactMe>
      },
    ]
  }
])
function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
