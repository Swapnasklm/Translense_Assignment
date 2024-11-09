import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BusinessInformationForm from './forms/BusinessInformationForm';
import OwnerManagerDetailsForm from './forms/OwnerManagerDetailsForm';

const StepContent: React.FC = () => {
  const step = useSelector((state: RootState) => state.form.step);

  return (
    <div className="col-md-9">
      {step === 1 && <BusinessInformationForm />}
      {step === 2 && <OwnerManagerDetailsForm />}
      {/* Add further components based on step */}
    </div>
  );
};

export default StepContent;
