import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import ListArticles from './Components/Articles/ListArticles';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AjoutArticle from './Components/Articles/AjoutArticle'; 
import EditArticle from './Components/Articles/EditArticle';
import Login from './Authentification/Login';
import ListCards from './Components/Client/ListCards'; 
import { CartProvider } from "react-use-cart"; 
import CartProduct from './Components/Client/CartProduct';
import Registration from './Components/Client/Registration';
import LoginClient from './Components/Client/LoginClient'; 
import ListCommandes from './Components/Commandes/ListCommandes';
import Dashboard from './Components/Admin/Dashboard'; 



function App() {
return (
    <CartProvider>
<>
 <Router>
 <Box sx={{ flexGrow: 1 }}>
 <AppBar position="static" color="secondary">
 <Toolbar>
 <IconButton
 size="large"
 edge="start"
 color="warning"
 aria-label="menu"
 sx={{ mr: 2 }}
 >
 </IconButton>
 <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
Gestion des articles
 </Typography>
<Link to="/"><Button class="p-3 mb-2 bg-secondary text-white btn-lg">Liste des Articles</Button></Link>
<Link to="/listcommandes"><Button class="p-3 mb-2 bg-secondary text-white btn-lg">Liste des Commandes</Button></Link>
 </Toolbar>
 </AppBar>
 </Box>
 <Routes>
 
 <Route path="/addArticles" element={<AjoutArticle/>}></Route>
 <Route path="/editArticles/:_id" element={<EditArticle/>}></Route>
 <Route path="/admin" element={<Login/>}></Route>
 <Route exact path="/articles" element={<ListArticles/>}></Route>
 <Route path="/" element={<ListCards/>}></Route>
 <Route path="/cart" element={<CartProduct/>}></Route>
 <Route path="/register" element={<Registration/>}></Route>
 <Route path="/loginclient" element={<LoginClient/>}></Route>
 <Route path="/listcommandes" element={<ListCommandes/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>
 </Routes>
 </Router>
</>
</CartProvider>
 );
}
export default App; 