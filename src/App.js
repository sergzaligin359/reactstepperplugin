import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Header } from './components/Header';
import { Step1, Step2, Step3, Result } from './components/Stepper';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Step1 } />
          <Route exact path="/step2" component={ Step2 } />
          <Route exact path="/step3" component={ Step3 } />
          <Route exact path="/result" component={ Result } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
