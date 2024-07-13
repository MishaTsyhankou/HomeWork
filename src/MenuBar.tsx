import './App.scss'
import { Basket } from './assets/basket'


function MenuBar() {

    return (
        <>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Products</a></li>
                <li><a href=''><Basket /></a></li>
            </ul>
        </>
    )
}

export default MenuBar