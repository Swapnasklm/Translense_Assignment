import React, { useState } from 'react';
import { BsUpload, BsInfoCircle, BsCircle, BsGeoAlt } from 'react-icons/bs';

const OwnerManagerDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    profilePic: null as File | null,
    state: '',
    city: 'Delhi',
    country: 'India',
    address: 'Domino’s Pizza, SHOP NO-85, 87, The Mall Rd, Kingsway Camp, GTB Nagar, New Delhi, Delhi 110009',
    email: 'apurvadubey@gmail.com',
    phoneNumber: '9876543210',
    wantsManagerDetails: false,
    openingTime: '08:00',
    closingTime: '10:00',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, profilePic: e.target.files ? e.target.files[0] : null });
  };

  const handleYesNoClick = (answer: boolean) => {
    setFormData({ ...formData, wantsManagerDetails: answer });
  };

  return (
    <form className="p-3 mx-auto" style={{ maxWidth: '100%', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-center" style={{ color: '#b22222', fontWeight: 'bold' }}>
          Owner & Manager Details
        </h2>
      </div>

      {/* Owner Details Button */}
      <div className="d-flex justify-content-start mb-3">
        <button type="button" className="btn" style={{ backgroundColor: '#800000', color: 'white' }}>
          Owner Details
        </button>
      </div>

      {/* Full Name and Profile Pic */}
      <div className="row mb-5">
        <div className="col-md-5 position-relative me-4">
          <label className="form-label text-danger d-flex align-items-center">
            Full Name <span className="text-danger ms-1">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Eg. Prabhat Kumar, Sushma Singh"
            className="form-control"
            required
          />
          <BsInfoCircle className="position-absolute text-danger" style={{ top: '5px', right: '10px' }} />
        </div>

        <div className="col-md-4 d-flex flex-column justify-content-end align-items-start">
          <label className="form-label text-danger">
            Profile Pic <span className="text-danger">*</span>
          </label>
          <div
            className="border rounded d-flex flex-column justify-content-center align-items-center position-relative"
            style={{
              height: '100px',
              width: '100px',
              cursor: 'pointer',
              textAlign: 'center',
              color: '#6c757d',
            }}
            onClick={() => document.getElementById('profilePic')?.click()}
          >
            <BsUpload size={20} />
            <p style={{ fontSize: '0.8em', margin: '5px 0' }}>Upload</p>
            <input
              type="file"
              id="profilePic"
              onChange={handleFileChange}
              className="d-none"
              accept="image/*"
            />
          </div>
        </div>
      </div>

      {/* State Field */}
      <div className="row mb-3">
        <div className="col-md-5 position-relative" style={{ marginTop: '-50px' }}>
          <label className="form-label text-danger d-flex align-items-center">
            State <span className="text-danger ms-1">*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="" disabled selected>
              Select State
            </option>
            <option value="Delhi">Delhi</option>
            <option value="UP">UP</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>
          <BsInfoCircle className="position-absolute text-danger" style={{ top: '5px', right: '10px' }} />
        </div>
      </div>

      {/* City and Country */}
      <div className="row mb-3 gap-5">
        <div className="col-md-5 position-relative">
          <label className="form-label text-danger d-flex align-items-center">
            City <span className="text-danger ms-1">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <BsInfoCircle className="position-absolute text-danger" style={{ top: '5px', right: '10px' }} />
        </div>

        <div className="col-md-5 position-relative">
          <label className="form-label text-danger d-flex align-items-center">
            Country <span className="text-danger ms-1">*</span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <BsInfoCircle className="position-absolute text-danger" style={{ top: '5px', right: '10px' }} />
        </div>
      </div>

      {/* Address Field */}
      {/* Address Field */}
{/* Address Field */}
{/* Address Field */}
{/* Address Field */}
<div className="row mb-3">
  <div className="col-md-10">
    <label className="form-label text-danger">
      Address <span className="text-danger ms-1">*</span>
    </label>
    <div className="d-flex align-items-center">
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        className="form-control"
        style={{
          width: '150%', // Increased width to nearly fill the row
        }}
        required
      />
      <span className="ms-2" style={{ cursor: 'pointer' }}>
        <BsGeoAlt className="text-black" />
      </span>
    </div>
  </div>
</div>

      {/* Email and Phone Number */}
      <div className="row mb-5 gap-5">
        <div className="col-md-5 position-relative">
          <label className="form-label text-danger d-flex align-items-center">
            E-mail <span className="text-danger ms-1">*</span>
          </label>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            <button type="button" className="btn btn-danger">Send OTP</button>
          </div>
          <div className="text-danger" style={{ position: 'absolute', bottom: '-20px', right: '0' }}>
            <span>Same as business mobile number</span>
            <BsCircle size={12} className="ms-2" />
          </div>
          <BsInfoCircle className="position-absolute text-danger" style={{ top: '5px', right: '10px' }} />
        </div>

        <div className="col-md-5 position-relative">
          <label className="form-label text-danger d-flex align-items-center">
            Mobile Number <span className="text-danger ms-1">*</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            <button type="button" className="btn btn-danger">Send OTP</button>
          </div>
          <div className="text-danger" style={{ position: 'absolute', bottom: '-20px', right: '0' }}>
            <span>Same as business mobile number</span>
            <BsCircle size={12} className="ms-2" />
          </div>
          <BsInfoCircle className="position-absolute text-danger" style={{ top: '5px', right: '10px' }} />
        </div>
      </div>

      {/* Manager Details Yes/No */}
      <div className="mb-3 d-flex align-items-center gap-3" style={{ marginTop: '40px' }}>
        <label className="form-label text-dark mb-0">
          Do you want to fill manager details?
        </label>
        <button type="button" onClick={() => handleYesNoClick(true)} className="btn btn-outline-danger">
          Yes
        </button>
        <button type="button" onClick={() => handleYesNoClick(false)} className="btn btn-outline-danger">
          No
        </button>
      </div>
    </form>
  );
};

export default OwnerManagerDetailsForm; 