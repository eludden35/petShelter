import Main from './views/Main'
import OnePet from './views/OnePet'
import './App.css';
import {Router, Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPet from './views/NewPet';
import EditPet from './views/EditPet';


function App() {
  return (
    <div className="App">
      <h1 className="jumbotron">Pet Shelter</h1>
      <Router>
        <Main path="/"/>
        <OnePet path="/pets/:_id"/>
        <NewPet path="/pets/new"/>
        <EditPet path="/pets/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
