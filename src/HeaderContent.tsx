import './App.scss'
import Button from './Button'



function HeaderContent() {

    return (
        <>
        <div className='headerContent_block'>
            <h1>
            Discover the vast expanses of space
            </h1>
            <p>Where the possibilities are endless!</p>
        <Button />

        </div>
        <div className='headerContent_image'></div>
            
        </>
    )
}

export default HeaderContent