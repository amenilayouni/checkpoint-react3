import './App.css';
import Address from './components/Address';
import FullName from './components/FullName';
import ProfilePhoto from './components/ProfilePhoto'

function App() {
  return (
    <div className="App">
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
