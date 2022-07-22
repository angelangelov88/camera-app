import React from 'react';
import './App.css';


function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div>
    <h1>Upload and Display Image usign React Hook's</h1>
    {selectedImage && (
      <div>
      <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
      <br />
      <button onClick={()=>setSelectedImage(null)}>Remove</button>
      </div>
    )}
    <br />
   
    <br /> 
    <input
      type="file"
      name="myImage"
      onChange={(event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
      }}
    />
  </div>

    // <>
    //   <div className="App">
    //     <input 
    //       // accept="image/*" 
    //       // id="icon-button-file" 
    //       type="file" 
    //       // capture="user"
    //     />

    //   </div>
    // </>
  );
}

export default App;
