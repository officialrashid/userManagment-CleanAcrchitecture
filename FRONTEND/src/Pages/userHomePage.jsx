import React from 'react';
import Home from '../Components/userHomePage/Home';
import Profile from '../Components/profile/profile'; // Update the import statement

function UserHomePage() { // Update the component name to use camel case
  return (
    <div>
      <Home />
      {/* Corrected usage of the Profile component */}
    </div>
  );
}

export default UserHomePage; // Update the export statement
