import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../types/formTypes';

const initialState: FormState = {
  step: 1,
  businessInfo: {},
  ownerInfo: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setBusinessInfo: (state, action: PayloadAction<any>) => {
      state.businessInfo = action.payload;
    },
    setOwnerInfo: (state, action: PayloadAction<any>) => {
      state.ownerInfo = action.payload;
    },
  },
});

export const { setStep, setBusinessInfo, setOwnerInfo } = formSlice.actions;
export default formSlice.reducer;
