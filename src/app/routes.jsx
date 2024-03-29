import { Route, createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import CryptoHome from "pages/CryptoHome";
import CryptoDetail from "pages/CryptoDetail";
import Header from "layout/Header";

const routes = createBrowserRouter(
    createRoutesFromElements(
     <>
             <Route element={<Header/>}>
                <Route path="/" element={<CryptoHome/>}/>
                <Route path="coin/:id" element={<CryptoDetail/>}/>
            </Route>
     </>
    )
  );
  
  export default routes;