import './App.scss';
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import Header from './Components/Header';
import Filters from './Components/Filters';

function App() {
  return (
    <div className='App'>

		<Navigation/> 
		<Header />
		<Filters/>
		<Profile/>
    </div>
  );
}

export default App;
