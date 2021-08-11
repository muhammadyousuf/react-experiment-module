import React from 'react';
import PrintMsg from 'mesg'

const App: React.FC = () => {
  const handleClick = () => {
    console.log("Button Click")
  }
  return (
    <React.Fragment >
      <PrintMsg formName="USER SIGNUP FORM" title="Login" onPress={handleClick} type="primary" />
    </React.Fragment >
  )
}


export default App;