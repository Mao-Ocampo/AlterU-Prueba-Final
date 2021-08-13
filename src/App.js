import './App.css';
import { GetMovieList } from './fetchapi';
import { Counter } from './Counter';

function App() {

  GetMovieList(2015);

  return (
    <div className="App">
      <GetMovieList/>
      <Counter/>
    </div>
  );
}

export default App;
