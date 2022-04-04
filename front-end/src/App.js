import './App.scss';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Header from './components/Header';
import Filters from './components/Filters';

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
