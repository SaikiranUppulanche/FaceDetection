import React, { Component } from 'react'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import Rank from './Components/Rank/Rank'
import './App.css'
import ParticlesBg from 'particles-bg'
// import Clarifai from 'clarifai'

// const app = new Clarifai.App({
//   apiKey: '510c1a74c83541f481af524558ead53e'
// });

const returnClarifaiRequestOptions = (imageUrl) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = 'b8c96f76bb8c458b9f6862e793b7dc92';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'saikiran_uppulanche';
  const APP_ID = 'test';
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };
  return requestOptions
}



// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // In this section, we set the user authentication, user and app ID, model details, and the URL
// // of the image we want as an input. Change these strings to run your own example.
// //////////////////////////////////////////////////////////////////////////////////////////////////



// ///////////////////////////////////////////////////////////////////////////////////
// // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
// ///////////////////////////////////////////////////////////////////////////////////





// // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// // this will default to the latest version_id




class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},

    }
  }



  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    console.log("IMAGE",this.state.input)
    fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs", returnClarifaiRequestOptions(this.state.input))
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  render() {
    return (
      <div className='App'>
        <ParticlesBg color='#ffffff' num={300} type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    )
  }

}

export default App
