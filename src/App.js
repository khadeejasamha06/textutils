import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        setMode={setMode}
      />

      <Alert alert={alert} />

      <TextForm
        heading="Khadeeja samha"
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;