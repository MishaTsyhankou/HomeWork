import { useEffect, useState } from 'react';
import '../App.css'
import Button from '../Button'


function Main() {
    const [text, setText] = useState("Go on a space adventure - it's possible with us!");

    const updateText = () => {
        if (window.innerWidth <= 768) {
          setText('Go on a space adventure');
        } 
    }
        useEffect(() => {
            updateText();
            window.addEventListener('resize', updateText);
            return () => window.removeEventListener('resize', updateText);
          }, []);

    return (
        <>
            <main>
                <div className='middle_block_wrapper'>
                    <div className="flex-item">
                        <div className='flex-item_mainText'>
                            <p>Move the borders of reality!</p>
                        </div>
                        <div className='flex-item_secondText'>
                            <p>{text}</p>
                        </div>
                        <div className='flex-item_Button'>
                            <Button className='secondary_button secondary_buttonHover' />
                        </div>
                    </div>
                    <div className="flex-item">
                        <div className='flex-item_mainText'>
                            <p>Space is not just stars and planets</p>
                        </div>
                        <div className='flex-item_secondText'>
                            <p>it is a majestic journey to</p>
                        </div>
                        <div className='flex-item_Button'>
                            <Button className='secondary_button secondary_buttonHover' />
                        </div>
                    </div>
                    <div className="flex-item">
                        <div className='flex-item_mainText'>
                            <p>For those who dream of stars</p>
                        </div>
                        <div className='flex-item_secondText'>
                            <p>Our offer: make your dream come true</p>
                        </div>
                        <div className='flex-item_Button'>
                            <Button className='secondary_button secondary_buttonHover' />
                        </div>
                    </div>
                    <div className="flex-item">
                        <div className='flex-item_mainText'>
                            <p>Fulfill your fantastic dreams</p>
                        </div>
                        <div className='flex-item_secondText' >
                            <p>Space has never been so close</p>
                        </div>
                        <div className='flex-item_Button'>
                            <Button className='secondary_button secondary_buttonHover' />
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Main