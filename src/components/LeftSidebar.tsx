import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setStep } from '../slices/formSlice';

const LeftSidebar: React.FC = () => {
  const step = useSelector((state: RootState) => state.form.step);
  const dispatch = useDispatch();

  const steps = [
    'Business Information',
    'Owner & Manager Details',
    'PAN/Aadhaar Details',
    'Legal Documents',
    'Bank Details',
    'Service Info',
    'Preview Document',
    'Reach Increased',
  ];

  return (
    <div className="col-md-3 d-flex flex-column">
      <div
        className="card shadow-sm"
        style={{
          backgroundColor: '#FFC085',
          borderRadius: '8px',
          padding: '1rem',
          minHeight: '85vh',
          height: 'auto',
          maxHeight: 'calc(100vh - 50px)',
          flex: '1 0 auto',
        }}
      >
        <h5 className="mb-3" style={{ fontWeight: 'bold' }}>Partner with us</h5>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
          Be our partner in just a few steps and start increasing your reach by gaining new customers.
        </p>

        <div className="list-group mt-3">
          {steps.map((label, index) => (
            <div key={index} className="position-relative" style={{ marginBottom: '0.8rem' }}>
              <button
                className={`list-group-item list-group-item-action d-flex align-items-center ${step === index + 1 ? 'active' : ''}`}
                onClick={() => dispatch(setStep(index + 1))}
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#000',
                  padding: '0.7rem 0', // Increased padding for more spacing inside
                  fontWeight: step === index + 1 ? 'bold' : 'normal',
                  gap: '0.6rem', // Add gap between icon and label
                }}
              >
                <span
                  className="d-inline-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: step === index + 1 ? '#FF6666' : '#F7E0C0',
                    color: step === index + 1 ? '#ffffff' : '#666666',
                    border: step === index + 1 ? 'none' : '1px solid #666666',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                  }}
                >
                  {index + 1}
                </span>
                {label}
              </button>

              {index < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '40px',
                    height: '30px',
                    width: '2px',
                    backgroundColor: '#666666',
                    opacity: 0.15,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
