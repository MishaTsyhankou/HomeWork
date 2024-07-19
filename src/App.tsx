import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Article from './Main/Article'
import Main from './Main/Main'
import Offers from './Main/Offers'

function App() {

  return (
    <>
      <div className='mainWrapper'>
        <Header />
        <Offers/>
        <Main />
        <Article />
        <Footer />
      </div>
    </>
  )
}

export default App
