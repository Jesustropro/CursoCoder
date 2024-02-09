import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [Total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      <NavBar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        Total={Total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ItemListContainer
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        Total={Total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Footer />
    </>
  );
}

export default App;
