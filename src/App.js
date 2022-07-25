import React from 'react';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imgUpload, setImgUpload] = React.useState(null);

  const handleRemove = () => {
    setSelectedImage(null)
  }

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
    var file = e.target.files[0]
    // console.log(file)
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImgUpload(reader.result)
    };
    console.log(imgUpload);
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  return (
    <div>
    <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"550px"}
            src={URL.createObjectURL(selectedImage)} 
          />
          <br />
          <button onClick={handleRemove}>Change image</button>
        </div>
      )}
    <br />
   
    <br /> 
    {!selectedImage &&
    <input
      type="file"
      name="imgUpload"
      accept=".png"
      onChange={handleUpload}
    />
    }
  </div>
  );
}

export default App;
