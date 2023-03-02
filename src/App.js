import './App.css';
import Posts from './Components/Post';
import Postform from './Components/Postform';
import { Provider } from 'react-redux';
import store from '../src/Redux-components/store';
import PostList from './Components/PostList';
import AddForm from './Components/AddForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Postform /> */}
        {/* <Posts /> */}
        <AddForm />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
