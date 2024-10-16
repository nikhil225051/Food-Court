import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Home } from './component/Home/Home';
import RestauentDetails from './component/Restaurent/RestauentDetails';
import { Cart } from './component/Cart/Cart';
import { CartItem } from './component/Cart/CartItem';
import { Profile } from './component/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './component/State/Authantication/Action';

function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth}= useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt||jwt))
  },[auth.jwt]);

  return (
   <ThemeProvider theme={darkTheme}>

    <CssBaseline/>
   <CustomerRoute/>
   </ThemeProvider>
  );
}

export default App;



