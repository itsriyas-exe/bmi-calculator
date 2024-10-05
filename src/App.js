import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male'); // Default gender is male
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (weight==='' || height==='') {
      alert('Please enter the required inputs')
    }else{
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBMI);
      setStatus(getHealthStatus(calculatedBMI));
    }
  };

  const getHealthStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    if (bmi >= 30) return 'Obese';
  };

  const resetInputs = () => {
    setWeight('');
    setHeight('');
    setGender('male'); // Reset gender to default
    setBmi(null);
    setStatus('');
  };

  const openlink = ()=>{
    window.open('https://github.com/itsriyas-exe', '_blank');
  }
  return (
    <>
       <div className="container mt-2">
        <h1><span style={{fontWeight:'bold'}}>BMI</span> Calculator</h1>
        <div className="input-section mt-3">
          {/* Gender Selection */}
          <div>
            <label>Gender:</label>
            <label  className='ms-2'>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />Male&nbsp;<i class="uil uil-mars"></i>
            </label>
            <label className='ms-2'>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female&nbsp;<i class="uil uil-venus"></i>
            </label>
          </div>

          <div>
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className='padding-3 form-control'
              style={{width:'200px'}}
            />
          </div>

          <div>
            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              className='padding-3 form-control'
              style={{width:'200px'}}
            />
          </div>

          <button className='btn btn-primary rounded mt-3 me-3' onClick={calculateBMI}>Calculate BMI</button>
          <button className='btn btn-danger rounded mt-3' onClick={resetInputs}>Reset</button>
        </div>

        {bmi && (
          <div className="result-section mt-3">
            <h2>Your BMI: {bmi}</h2>
            <h3>Status: {status}</h3>
            <p>{gender === 'male' ? 'For males, it’s important to maintain muscle mass.' : 'For females, staying active and eating a balanced diet is crucial.'}</p>
          </div>
        )}
      </div>
      <footer className='container'>
         <p className='text-dark text-center' style={{fontSize:'15px',marginTop:'400px'}}>BMI-calculator&nbsp;<span id='brand' onClick={openlink} style={{cursor:'pointer'}}>|&nbsp;<i class="uil uil-github"></i> itsriyas</span></p>
      </footer>
    </>
  );
}

export default App;
