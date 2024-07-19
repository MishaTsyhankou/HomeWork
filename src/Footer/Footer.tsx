import '../App.css'
import { Rocket } from '../assets/rocket'


function Footer() {

    return (
        <>
            <footer className='footer'>
              <div className='rocket'><Rocket /></div>
              <div className='footer_text'><p>Exciting space adventure!</p></div>
            </footer>
        </>

    )
}

export default Footer