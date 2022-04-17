import { Routes, Route } from "react-router-dom";

import Navgiation from "./routes/navgiation/navgiation.component"
import Home from "./routes/home/home.component";



const Shop = () => {
    return (
        <h1>I am the shop page</h1>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navgiation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Route>
        </Routes>
    );
};

export default App;
