import React, {useEffect} from 'react';
import { IconThankYou } from '../../assets/images/index.js';
import './ThankYou.styles.scss';

const ThankYou = () => {

    useEffect(() => {
        document.querySelector('.mobile-bottom-bar').style.display = 'none';

        return () => document.querySelector('.mobile-bottom-bar').style.display = 'flex';
    }, []);

    return (
        <div className='thankyou'>
            <object data={IconThankYou}></object>
            <h1>Thank you!</h1>
            <p>
                Thanks for confirming your subscription!
                We hope you have fun using our platform.
                If you ever need support, please feel
                free to email us at support@loremgaming.com
            </p>
        </div>
    );
};

export default ThankYou;