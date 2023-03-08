import './App.css';
import Posts from './Components/Post';
import Postform from './Components/Postform';
import { Provider } from 'react-redux';
import store from '../src/Redux-components/store';
import PostList from './Components/PostList';
import AddForm from './Components/AddForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <ToastContainer />
        {/* <Postform /> */}
        {/* <Posts /> */}
        <AddForm />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
