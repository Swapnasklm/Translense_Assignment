import React from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import StepContent from './components/StepContent';

const App: React.FC = () => {
  return (
    <div className="container bg-light mt-5 p-4 rounded">
      <Header />
      <div className="row">
        <LeftSidebar />
        <StepContent />
      </div>
    </div>
  );
};

export default App;


