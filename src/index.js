import ReactDom from "react-dom";
import App from './App'
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from "react-router-dom"
import CartProvider from "./Components/Context/CartProvider";
import AuthContextProvider from "./Components/Context/AuthContext";


ReactDom.render(
<AuthContextProvider>
    <BrowserRouter>
        <CartProvider>
            <App />
        </CartProvider>
    </BrowserRouter>
    </AuthContextProvider>

    , document.getElementById('root'));         