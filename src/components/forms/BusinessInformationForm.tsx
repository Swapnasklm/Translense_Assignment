import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBusinessInfo, setStep } from '../../slices/formSlice';
import { BsInfoCircle, BsUpload, BsGeoAlt } from 'react-icons/bs';

const stateOptions = {
  India: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat'],
  USA: ['California', 'Texas', 'Florida', 'New York', 'Illinois'],
  UK: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
};

const BusinessInformationForm: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    businessName: 'Dominos Pizza',
    country: 'India',
    state: 'Delhi',
    city: 'Delhi',
    address: 'Dominos Pizza, SHOP NO-85, 87, The Mall Rd, Kingsway Camp, GTB Nagar, New Delhi, Delhi 110009',
    openingTime: '07:00',
    closingTime: '07:00',
    email: 'kingsway.delhi@domino.com',
    phoneNumber: '9876543219',
    restaurantImage: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'country') {
      setFormData({
        ...formData,
        country: value,
        state: stateOptions[value as keyof typeof stateOptions][0],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, restaurantImage: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    dispatch(setBusinessInfo(formData));
    dispatch(setStep(2));
  };

  return (
    <form style={{ textAlign: 'left', maxWidth: '800px', margin: '0' }}>
      <h2 className="mb-4" style={{ color: '#b22222', fontWeight: 'bold', paddingLeft: '10px' }}>Business Information</h2>

      {/* Business Name and Country */}
      <div className="row gx-5 g-4">
        <div className="col-md-6">
          <label className="form-label text-danger d-flex align-items-center justify-content-between" style={{ paddingLeft: '10px' }}>
            Business Name *
            <span className="ms-2 mt-n3"><BsInfoCircle className="text-danger" /></span>
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            className="form-control"
            required
            style={{ paddingLeft: '5px', height: '45px' }}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label text-danger d-flex align-items-center justify-content-between" style={{ paddingLeft: '10px' }}>
            Country
            <span className="ms-2 mt-n3"><BsInfoCircle className="text-danger" /></span>
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="form-select"
            style={{ paddingLeft: '5px', height: '45px' }}
          >
            {Object.keys(stateOptions).map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      {/* State and City */}
      <div className="row gx-5 g-4 mt-3">
        <div className="col-md-6">
          <label className="form-label text-danger d-flex align-items-center justify-content-between" style={{ paddingLeft: '10px' }}>
            State *
            <span className="ms-2 mt-n3"><BsInfoCircle className="text-danger" /></span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="form-select"
            style={{ paddingLeft: '5px', height: '45px' }}
          >
            {stateOptions[formData.country as keyof typeof stateOptions].map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label text-danger d-flex align-items-center justify-content-between" style={{ paddingLeft: '10px' }}>
            City *
            <span className="ms-2 mt-n3"><BsInfoCircle className="text-danger" /></span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="form-control"
            required
            style={{ paddingLeft: '5px', height: '45px' }}
          />
        </div>
      </div>

      {/* Address */}
      <div className="mb-3 mt-3" style={{ paddingLeft: '10px' }}>
        <label className="form-label text-danger d-flex align-items-center justify-content-between" style={{ paddingLeft: '10px' }}>
          Address *
          <span className="ms-2 mt-n3"><BsInfoCircle className="text-danger" /></span>
        </label>
        <div className="input-group">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="form-control"
            required
            style={{ paddingLeft: '5px', height: '45px' }}
          />
          <span className="input-group-text" style={{ height: '45px' }}>
            <BsGeoAlt color="black" />
          </span>
        </div>
      </div>

      {/* Opening and Closing Time */}
      <div className="row gx-5 mb-3">
        <div className="col-md-6">
          <label className="form-label text-danger d-flex align-items-center">
            Opening Time <span className="text-danger ms-1">*</span>
          </label>
          <input
            type="text"
            name="openingTime"
            value={formData.openingTime}
            onChange={handleInputChange}
            className="form-control"
            required
            style={{ height: '45px' }}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label text-danger d-flex align-items-center">
            Closing Time <span className="text-danger ms-1">*</span>
          </label>
          <input
            type="text"
            name="closingTime"
            value={formData.closingTime}
            onChange={handleInputChange}
            className="form-control"
            required
            style={{ height: '45px' }}
          />
        </div>
      </div>

      {/* Email and Phone Number */}
      <div className="row gx-5 g-4 mt-3">
        <div className="col-md-6">
          <label className="form-label text-danger d-flex align-items-center justify-content-between" style={{ paddingLeft: '10px' }}>
            Email Address *
            <span className="ms-2 mt-n3"><BsInfoCircle className="text-danger" /></span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter email"
            required
            style={{ paddingLeft: '5px', height: '45px' }}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label text-danger d-flex align-items-center justify-content-between" style={{ paddingLeft: '10px' }}>
            Mobile Number *
            <span className="ms-2 mt-n3"><BsInfoCircle className="text-danger" /></span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter phone number"
            required
            style={{ paddingLeft: '5px', height: '45px' }}
          />
        </div>
      </div>

      {/* Restaurant Image */}
      <div className="mb-3 mt-3" style={{ paddingLeft: '0', marginLeft: '0' }}>
        <label className="form-label text-danger d-flex align-items-center justify-content-between" style={{ paddingLeft: '10px' }}>
          Upload image of your Restaurant
          {/*<span className="ms-2 mt-n3"><BsInfoCircle className="text-danger" /></span>*/}
        </label>
        <label
          htmlFor="file-upload"
          className="d-flex justify-content-center align-items-center border border-secondary rounded"
          style={{
            height: '90px',
            width: '90px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            color: '#6c757d',
          }}
        >
          <BsUpload className="mb-2" size={20} />
          <span style={{ fontSize: '12px' }}>Click to upload</span>
        </label>
        <input
          id="file-upload"
          type="file"
          name="restaurantImage"
          onChange={handleFileChange}
          className="form-control"
          style={{ display: 'none' }}
        />
      </div>

      {/* Submit Button */}
      <div className="d-flex justify-content-end mt-4">
  <button
    type="button"
    onClick={handleSubmit}
    className="btn btn-danger"
    style={{ width: '50%' }}  // Increase width without changing alignment
  >
    Proceed to Owner & Manager Details →
  </button>
</div>

    </form>
  );
};

export default BusinessInformationForm;