import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Test from './pages/test/Test';
import Main from './pages/main/Main';
import CreateAvatar from 'pages/createAvatar/CreateAvatar';
import SkinType from 'pages/skinType/SkinType';
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
            <Route path="createAvatar" element={<CreateAvatar />} />
            <Route path="skinType" element={<SkinType />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </>;
}

export default App;
