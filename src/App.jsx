import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import NewBlog from './pages/newBlog';
import Blog from './pages/blog';
import Error from './components/elements/Error';
import Test from './pages/test';
import {Provider} from 'react-redux'
import Store from './redux/store';

function App() {
  return (
    <>
      <Provider store={Store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newblog' element={<NewBlog />} />
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path='*' element={<Error typeErr='notFound' />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Router>
      </Provider>
    </>
  )
}

export default App;
