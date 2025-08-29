import './App.css';
import Editor1 from './components/Editor1';
import Editor2 from './components/Editor2';


function App() {
  return (
    <div className="App">
      <Editor1 />

      <div className="borderline"></div>

      <Editor2 />
    </div>
  );
}

export default App;
