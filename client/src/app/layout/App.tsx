import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, Typography } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "../../features/catalog/Catalog";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import Header from "./Header";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServerError from "../errors/ServerError";
import Basketpage from "../../features/basket/BasketPage";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";

function App() {
  const{setBasket} =useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if(buyerId){
      agent.Basket.get()
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    } else{
      setLoading(false)
    }
  },[setBasket])
  


  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode)
  }

  if(loading) return <Typography variant="h3">Initialising app..</Typography> 

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right'/>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<ProductDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/server-error' element={<ServerError />} />
          <Route path='/basket' element={<Basketpage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
