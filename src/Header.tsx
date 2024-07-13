import './App.scss'
import HeaderContent from './HeaderContent'
import Navigation from './Navigation'


function Header() {

    return (
      <>
       <div className='headerFix'></div>
       <div className='pad-top'>
       <div className='nav-block'>
       <Navigation/>
       </div>
       <HeaderContent />
      </div>
      </>
    )
  }
  
  export default Header