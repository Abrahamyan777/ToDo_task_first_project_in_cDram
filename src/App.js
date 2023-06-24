import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Loyout from './componets/Loyaut.js/Loyout';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Home from './pages/home/Home';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import ToDoList from './pages/toDo/ToDoList';



function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Loyout />}>
            <Route index element={<ToDoList />}/>
            <Route path='todolist'  element={<ToDoList />}/>
            <Route path='home'  element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="blog" element={<Blog />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>      
      </>
  );
}

export default App;
