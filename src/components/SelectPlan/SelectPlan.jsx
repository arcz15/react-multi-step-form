import React, { useState, useEffect } from 'react';
import { Plans, setCurrentStep, updateData } from '../../redux/formDataSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import './SelectPlan.styles.scss';
import { IconArcade, IconAdvanced, IconPro } from '../../assets/images/index.js';

const SelectPlan = () => {

    const currentData = useSelector((state) => state.formData.data);
    const dispatch = useDispatch();

    const [plan, setPlan] = useState(currentData.plan);
    const [isYearlyRenewed, setIsYearlyRenewed] = useState(currentData.isYearlyRenewed);

    const goBack = () => dispatch(setCurrentStep(1));

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateData({ ...currentData, plan, isYearlyRenewed }));
        dispatch(setCurrentStep(3));
    }

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.selectplan').classList.add('slide-from-top')
        }, 100);
    }, []);

    return (
        <div className='selectplan'>
            <div className='stage-heading'>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <form onSubmit={handleSubmit} className='selectplan__form'>
                <div className='selectplan__form__plans'>
                    <div
                        data-selected={plan === Plans.ARCADE ? 'true' : 'false' }
                        onClick={() => setPlan(Plans.ARCADE)}
                        style={{ height: isYearlyRenewed ? '245px' : '220px' }}
                    >
                        <img src={IconArcade} alt='arcade-icon' />
                        <div>
                            <p>Arcade</p>
                            <span>{ isYearlyRenewed ? '$90/mo' : '$9/mo' }</span>
                            { isYearlyRenewed && (
                                <b>2 months free</b>
                            )}
                        </div>
                    </div>
                    <div
                        data-selected={plan === Plans.ADVANCED ? 'true' : 'false' }
                        onClick={() => setPlan(Plans.ADVANCED)}
                        style={{ height: isYearlyRenewed ? '245px' : '220px' }}
                    >
                        <img src={IconAdvanced} alt='advanced-icon' />
                        <div>
                            <p>Advanced</p>
                            <span>{ isYearlyRenewed ? '$120/mo' : '$12/mo' }</span>
                            { isYearlyRenewed && (
                                <b>2 months free</b>
                            )}
                        </div>
                    </div>
                    <div
                        data-selected={plan === Plans.PRO ? 'true' : 'false' }
                        onClick={() => setPlan(Plans.PRO)}
                        style={{ height: isYearlyRenewed ? '245px' : '220px' }}
                    >
                        <img src={IconPro} alt='pro-icon' />
                        <div>
                            <p>Pro</p>
                            <span>{ isYearlyRenewed ? '$150/mo' : '$15/mo' }</span>
                            { isYearlyRenewed && (
                                <b>2 months free</b>
                            )}
                        </div>
                    </div>
                </div>
                <div className='selectplan__form__switch'>
                    <span style={{ color: isYearlyRenewed ? '#9699AB' : '#02295A'}}>Monthly</span>
                    <input
                        type='checkbox'
                        className='switch'
                        checked={isYearlyRenewed}
                    />
                    <label
                        htmlFor='switch'
                        className='switch-label'
                        onClick={() => setIsYearlyRenewed(prev => !prev)}
                    ></label>
                    <span style={{ color: isYearlyRenewed ? '#02295A' : '#9699AB' }}>Yearly</span>
                </div>
                <div
                    className='selectplan__form__buttons'
                >
                    <button type='button' className='button-back' onClick={goBack}>Go Back</button>
                    <button type='submit' className='button-next'>Next Step</button>
                </div>
            </form>
        </div>
    );
};

export default SelectPlan;