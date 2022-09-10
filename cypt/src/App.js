import "./App.css";
import { Navbar } from "./components/Navbar";
import { AddCardPage } from "./components/pages/AddCardPage";
import { Home } from "./components/pages/Home";
import { WalletPage } from "./components/pages/WalletPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WalletPage />
      <AddCardPage />
    </div>
  );
};

export default App;
