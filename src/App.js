import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [Com, setCom] = React.useState(null);
  const [Com2, setCom2] = React.useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      setCom(React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: 'a' */'./a.js')));

      setCom2(React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'aa' */'./aa.js')));
    }, 2000);
  }, []);

  console.log(Com);

  return (
    <div className="App">
      <React.Suspense fallback={<></>}>
        {Com && <Com/>}
        {Com2 && <Com2/>}
      </React.Suspense>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
