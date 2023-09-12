import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Reference Generator <p className="subscript">powered by GPT3.5</p></header>
      <div className="content">
        <div className="inputArea">
          <textarea name="userInput" id="userInput" cols="50" rows="5" placeholder='Type in or paste your reference here'></textarea>
          <div className="customize">
          <select className="referencingStyle">
            <option value="1">Havard</option>
            <option value="2">APA</option>
          </select>
          <div type="submit" className="submitButton">Generate Reference</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
