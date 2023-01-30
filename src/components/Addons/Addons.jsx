import React, { useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Addons.styles.scss';
import {setCurrentStep, updateData } from "../../redux/formDataSlice.js";

const Addons = () => {

    const currentData = useSelector((state) => state.formData.data);
    const dispatch = useDispatch();

    const [onlineService, setOnlineService] = useState(currentData.addons.onlineService);
    const [largerStorage, setLargerStorage] = useState(currentData.addons.largerStorage);
    const [customizableProfile, setCustomizableProfile] = useState(currentData.addons.customizableProfile);

    const goBack = () => dispatch(setCurrentStep(2));

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateData({ ...currentData,
            addons: { onlineService, largerStorage, customizableProfile }}));
        dispatch(setCurrentStep(4));
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            document.querySelector('.addons').classList.add('slide-from-top')
        }, 100);
    }, []);

    return (
        <div className='addons'>
            <div className='stage-heading'>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='addons__form__elements'>
                    <div
                        className='addons__form__elements-element'
                        onClick={() => setOnlineService(prev => !prev)}
                        data-active={onlineService}
                    >
                        <input
                            type='checkbox'
                            className='custom-checkbox'
                            checked={onlineService}
                        />
                        <div>
                            <h2>Online service</h2>
                            <p>Access to multiplayer games</p>
                        </div>
                        <h3>{currentData.isYearlyRenewed ? '+$10/yr' : '+$1/mo'}</h3>
                    </div>
                    <div
                        className='addons__form__elements-element'
                        onClick={() => setLargerStorage(prev => !prev)}
                        data-active={largerStorage}
                    >
                        <input
                            type='checkbox'
                            className='custom-checkbox'
                            checked={largerStorage}
                        />
                        <div>
                            <h2>Larger storage</h2>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                        <h3>{currentData.isYearlyRenewed ? '+$20/yr' : '+$2/mo'}</h3>
                    </div>
                    <div
                        className='addons__form__elements-element'
                        onClick={() => setCustomizableProfile(prev => !prev)}
                        data-active={customizableProfile}
                    >
                        <input
                            type='checkbox'
                            className='custom-checkbox'
                            checked={customizableProfile}
                        />
                        <div>
                            <h2>Customizable profile</h2>
                            <p>Custom theme on your profile</p>
                        </div>
                        <h3>{currentData.isYearlyRenewed ? '+$20/yr' : '+$2/mo'}</h3>
                    </div>
                </div>
                <div className='addons__form__buttons'>
                    <button type='button' className='button-back' onClick={goBack}>Go Back</button>
                    <button type='submit' className='button-next'>Next Step</button>
                </div>
            </form>
        </div>
    );
};

export default Addons;