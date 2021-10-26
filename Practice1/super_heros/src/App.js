import './App.css';
import users from './api/data';
import Human from './api/Humans'

function App() {
  return (
    <div>
      {users.map((users) => <Human name={users.name} age={users.age}/>)}
    </div>
  );
}

export default App;