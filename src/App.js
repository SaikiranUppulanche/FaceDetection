import React, { Component } from 'react'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import './App.css'
import ParticlesBg from 'particles-bg'
// import Clarifai from 'clarifai'

// const app = new Clarifai.App({
//   apiKey: '510c1a74c83541f481af524558ead53e'
// });

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
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
        {/* <FaceRecognition />  */}
      </div>
    )
  }

}

export default App
