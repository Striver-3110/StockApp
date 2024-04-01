import "./App.css";
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col font-inter bg-richblack-900">
<Navbar></Navbar>
<Home/>

    </div>
  );
}

export default App;
