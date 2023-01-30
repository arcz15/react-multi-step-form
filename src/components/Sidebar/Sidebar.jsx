import React from 'react';
import './Sidebar.styles.scss';
import { setCurrentStep } from "../../redux/formDataSlice.js";
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const currentStep = useSelector((state) => state.formData.currentStep);

    return (
        <div className='sidebar'>
            <div className='sidebar__element'>
                <div
                    className='sidebar__element-stage-number'
                    data-active={currentStep === 1 ? 'true' : 'false'}
                >1</div>
                <div className='sidebar__element-stage-info'>
                    <span>STEP 1</span>
                    <p>YOUR INFO</p>
                </div>
            </div>
            <div className='sidebar__element'>
                <div
                    className='sidebar__element-stage-number'
                    data-active={currentStep === 2 ? 'true' : 'false'}
                >2</div>
                <div className='sidebar__element-stage-info'>
                    <span>STEP 2</span>
                    <p>SELECT PLAN</p>
                </div>
            </div>
            <div className='sidebar__element'>
                <div
                    className='sidebar__element-stage-number'
                    data-active={currentStep === 3 ? 'true' : 'false'}
                >3</div>
                <div className='sidebar__element-stage-info'>
                    <span>STEP 3</span>
                    <p>ADD-ONS</p>
                </div>
            </div>
            <div className='sidebar__element'>
                <div
                    className='sidebar__element-stage-number'
                    data-active={currentStep === 4 || currentStep === 5 ? 'true' : 'false'}
                >4</div>
                <div className='sidebar__element-stage-info'>
                    <span>STEP 4</span>
                    <p>SUMMARY</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;