import './App.css';
import Address from './components/Address';
import FullName from './components/FullName';
import ProfilePhoto from './components/ProfilePhoto'

const App = () => {

 return (

    <div className="App">
      <ProfilePhoto variant="top">
      <img
        className="img"
        src= {'./images/ProfilePhoto.jpg'}
        alt="First slide"
      />
      </ProfilePhoto>
     
     <FullName name='Ameni Ayouni'/>
 

     <Address adresse='Sidi Bouzid' />
     </div>
     
  );
}

export default App;
