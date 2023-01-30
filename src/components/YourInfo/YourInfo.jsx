import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './YourInfo.styles.scss';
import '../form-elements.scss';
import { setCurrentStep, updateData } from '../../redux/formDataSlice.js';
import { useSelector, useDispatch } from 'react-redux';

const YourInfo = () => {

    const currentData = useSelector((state) => state.formData.data);
    const dispatch = useDispatch();

    const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

    const formik = useFormik({
        initialValues: {
            name: currentData.name,
            email: currentData.email,
            phone: currentData.phone,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required.').max(50, 'Name must be 50 characters or less.'),
            email: Yup.string().email('Invalid email address.').required('Email address is required.'),
            phone: Yup.string().matches(phoneRegex, 'Invalid phone number.').required('Phone number is required.'),
        }),
        onSubmit: (values) => {
            dispatch(updateData({
                ...currentData,
                name: values.name,
                email: values.email,
                phone: values.phone,
            }));
            dispatch(setCurrentStep(2));
        }
    });

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.selectplan').classList.add('slide-from-top')
        }, 100);
    }, []);

    return (
        <>
            <div className='yourinfo slide-from-top'>
                <div className='stage-heading'>
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <form onSubmit={formik.handleSubmit} className='yourinfo__form'>
                    <div className='yourinfo__form__element'>
                        <div className='yourinfo__form__element__labels'>
                            <label htmlFor='name'>Name</label>
                            <span>{formik.errors.name && formik.touched.name ? formik.errors.name : ''}</span>
                        </div>
                        <input
                            type='text'
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            placeholder='e.g Stephen King'
                            data-error={formik.errors.name && formik.touched.name ? 'true' : 'false'}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className='yourinfo__form__element'>
                        <div className='yourinfo__form__element__labels'>
                            <label htmlFor="email">Email Address</label>
                            <span>{formik.errors.email && formik.touched.email ? formik.errors.email : ''}</span>
                        </div>
                        <input
                            type='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder='e.g. stephenking@lorem.com'
                            data-error={formik.errors.email && formik.touched.email ? 'true' : 'false'}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className='yourinfo__form__element'>
                        <div className='yourinfo__form__element__labels'>
                            <label htmlFor="phone">Phone Number</label>
                            <span>{formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}</span>
                        </div>
                        <input
                            type='text'
                            name='phone'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            placeholder='e.g. +1 234 567 890'
                            data-error={formik.errors.phone && formik.touched.phone ? 'true' : 'false'}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <button type='submit' className='button-next'>Next Step</button>
                </form>
            </div>
        </>
    );
};

export default YourInfo;