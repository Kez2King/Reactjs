import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div>
      <ToDo 
        name="Learn JS"
        detail="How to make pages interactive"
      />
      <ToDo
        name="Learn React"
        detail="A Library to make complex UIs"
      />
      <ToDo
        name="Learn Some More"
        detail="Whatever comes my way ..."
      />
    </div>
  );
}

export default App;