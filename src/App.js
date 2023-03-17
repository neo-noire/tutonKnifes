import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./components/Pages/MainPage/MainPage";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { CategoryPage } from "./components/Pages/CategoryPage/CategoryPage";
import { ProductPage } from "./components/Pages/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
