import './App.css';
import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/Home/Home"

function App() {

  return (
  <>
  <div className="body w-[100%] h-[100vh] bg-gray-300">
<Navbar titles='TexTools'/>
<Home/>
</div>
  </>
  );
}

export default App;
