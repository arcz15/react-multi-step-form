import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Summary.styles.scss';
import TextBuilder from './TextBuilder.js';
import { setCurrentStep } from "../../redux/formDataSlice.js";

const Summary = () => {

    const data = useSelector((state) => state.formData.data);
    const isAnyAddonSelected = data.addons.onlineService || data.addons.largerStorage
        || data.addons.customizableProfile;

    const dispatch = useDispatch();

    const text = TextBuilder();

    const getButtonsMargin = () => {
        let margin = 255;
        if(data.addons.onlineService) margin -= 65;
        if(data.addons.largerStorage) margin -= 40;
        if(data.addons.customizableProfile) margin -= 35;
        return `${margin}px`;
    }

    const goBack = () => dispatch(setCurrentStep(3));

    function handleSubmit() {
        dispatch(setCurrentStep(5));
    }

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.summary').classList.add('slide-from-top')
        }, 100);
    }, []);

    return (
        <div className='summary'>
            <div className='stage-heading'>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='summary__elements'>
                <div className='summary__elements__planinfo'>
                    <div>
                        <h2>{text.plan}</h2>
                        <span onClick={() => dispatch(setCurrentStep(2))}>Change</span>
                    </div>
                    <h3>{text.cost}</h3>
                </div>
                { isAnyAddonSelected && (
                    <>
                        <div className='horizontal-line'/>
                        <div className='summary__elements__addons'>
                            {data.addons.onlineService && (
                                <div className='summary__elements__addons-addon'>
                                    <p>Online service</p>
                                    <span>{text.addonsCost.onlineService}</span>
                                </div>
                            )}
                            {data.addons.largerStorage && (
                                <div className='summary__elements__addons-addon'>
                                    <p>Larger storage</p>
                                    <span>{text.addonsCost.largerStorageCost}</span>
                                </div>
                            )}
                            {data.addons.customizableProfile && (
                                <div className='summary__elements__addons-addon'>
                                    <p>Customizable profile</p>
                                    <span>{text.addonsCost.customizableProfileCost}</span>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
            <div className='summary__total'>
                <h4>Total { data.isYearlyRenewed ? '(per year)' : '(per month)' }</h4>
                <h5>{text.totalCost}</h5>
            </div>
            <div
                className='summary__buttons'
                style={{
                    marginTop: getButtonsMargin()
                }}
            >
                <button
                    type='button'
                    className='button-back'
                    onClick={goBack}
                >Go Back</button>
                <button
                    type='button'
                    className='button-next'
                    onClick={handleSubmit}
                >Confirm</button>
            </div>
        </div>
    );
};

export default Summary;