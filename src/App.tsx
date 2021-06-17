import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonProps } from './components/Button/Button';

const onClickEvent = () => {
  console.info('Button Clicked!');
};
const btnProps: ButtonProps = {
  primary: true,
  label: 'Button',
  size: 'medium',
};
const App: React.FC = () => {
  const { primary, label, size } = btnProps;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Button
        label={label}
        primary={primary}
        size={size}
        onClick={onClickEvent}
      />
    </div>
  );
};

export default App;
