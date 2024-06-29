import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Test from './pages/test/Test';
import Main from './pages/main/Main';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from './theme';

function App() {
  return <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className='app'>
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="test" element={<Test />} />
            <Route path="main" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </>;
}

export default App;
