
import './styles.scss';
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from './pages/Products';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Home/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
