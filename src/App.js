import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutMe from './component/AboutMe/AboutMe';
import Blog from './component/Blogs/Blog';
import ContactMe from './component/ContactMe/ContactMe';
import Home from './component/Home/Home/Home';
import Main from './component/Layout/Main';
import Project from './component/Projects/Project';
import Projects from './component/Projects/Projects';
import Pruject from './component/Projects/Pruject';
import Pruject1 from './component/Projects/Pruject1';
import Pruject2 from './component/Projects/Pruject2';
import Pruject3 from './component/Projects/Pruject3';
import Skill from './component/Skill/Skill';
import Spinner from './shared/Spinner/Spinner';
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
        element : <Pruject></Pruject>
      },
      {
        path : '/projects1',
        element : <Pruject1></Pruject1>
      },
      {
        path : '/projects2',
        element : <Pruject2></Pruject2>
      },
      {
        path : '/projects3',
        element : <Pruject3></Pruject3>
      },
      {
        path : '/aboutMe',
        element : <AboutMe></AboutMe>
      },
      {
        path : '/contactMe',
        element : <ContactMe></ContactMe>
      },
      {
        path : '/blogs',
        element : <Blog></Blog>
      },
    ]
  }
])
function App() {
  return (
    <div className="App">
    <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
