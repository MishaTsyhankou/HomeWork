import '../App.css'
import { Basket } from '../assets/basket'
import Logo from './Logo'
//import MenuBar from './MenuBar'


function Navigation() {

    return (
        <>
        <nav className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      <Logo/>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <ul className="nav-list">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#"><Basket/></a></li>
  </ul>
</nav>
</>
    )
}

export default Navigation