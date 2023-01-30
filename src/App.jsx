import React, {useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from "react-redux";
import { Sidebar, YourInfo, SelectPlan, Addons, Summary } from './components';
import ThankYou from "./components/ThankYou/ThankYou.jsx";

const App = () => {

    const currentStep = useSelector((state) => state.formData.currentStep);

    function resizeBox() {
        const container = document.querySelector('#container');
        if(window.innerWidth <= 1024) {
            switch (currentStep) {
                case 1:
                    container.style.height = '570px';
                    break;
                case 2:
                    container.style.height = '750px';
                    break;
                case 3:
                case 4:
                    container.style.height = '585px';
                    break;
                case 5:
                    container.style.height = '400px';
            }
            return;
        }
        container.removeAttribute('style');
    }

    useEffect(() => resizeBox(), [currentStep]);

    useEffect(() => {
        window.addEventListener('resize', () => resizeBox());
    }, []);

    return (
        <>
            <div className='top-bar'>
                {[1,2,3,4].map((number) => (
                    <div
                        className='sidebar__element-stage-number'
                        data-active={currentStep === number ? 'true' : 'false'}
                        key={number}
                    >{number}</div>
                ))}
            </div>
            <div className='container' id='container'>
                <Sidebar />
                <div className='container__form'>
                    <CSSTransition
                        in={currentStep === 1}
                        timeout={1}
                        classNames='stage-switch'
                        unmountOnExit
                    >
                        <YourInfo />
                    </CSSTransition>
                    <CSSTransition
                        in={currentStep === 2}
                        timeout={1}
                        classNames='stage-switch'
                        unmountOnExit
                    >
                        <SelectPlan />
                    </CSSTransition>
                    <CSSTransition
                        in={currentStep === 3}
                        timeout={1}
                        classNames='stage-switch'
                        unmountOnExit
                    >
                        <Addons />
                    </CSSTransition>
                    <CSSTransition
                        in={currentStep === 4}
                        timeout={1}
                        classNames='stage-switch'
                        unmountOnExit
                    >
                        <Summary />
                    </CSSTransition>
                    <CSSTransition
                        in={currentStep === 5}
                        timeout={1}
                        classNames='stage-switch'
                        unmountOnExit
                    >
                        <ThankYou />
                    </CSSTransition>
                </div>
            </div>
            <div className='mobile-bottom-bar'></div>
        </>
    );
};

export default App;