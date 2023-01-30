import { createSlice } from '@reduxjs/toolkit';

export const Plans = {
    ARCADE: 1,
    ADVANCED: 2,
    PRO: 3,
}

const formDataSlice = createSlice({
    name: 'formData',
    initialState: {
        currentStep: 1,
        data: {
            name: '',
            email: '',
            phone: '',
            plan: Plans.ARCADE,
            isYearlyRenewed: false,
            addons: {
                onlineService: false,
                largerStorage: false,
                customizableProfile: false,
            }
        }
    },
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        updateData: (state, action) => {
            state.data = { ...state.data, ...action.payload};
        },
    }
});

export const { setCurrentStep, updateData } = formDataSlice.actions;

export default formDataSlice.reducer;