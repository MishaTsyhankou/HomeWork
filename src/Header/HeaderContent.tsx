import '../App.css'
import { Earth } from '../assets/earth'
import Button from '../Button'



function HeaderContent() {

    return (
        <>
            <div className='headerContent_block'>
                <div className='headerContent_block_text'>
                    <div className='headerContent__main'>
                        <p>
                            Discover the vast expanses of <span className='highlightSpace'>space</span>
                        </p>
                    </div>
                    <div className='headerContent__second'>
                        <p>Where the possibilities are <span className='highlightEndless'>endless!</span> </p>
                    </div>
                </div>
                <div className='headerContent_block_button'>
                    <Button className ='main_button main_buttonHover'/>
                </div>

            </div>
            <div className='headerContent_image'>
                <div className='earth_wrap'>
            <Earth />
            </div>
            </div>

        </>
    )
}

export default HeaderContent