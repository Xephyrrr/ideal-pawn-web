import { GoogleMap, LoadScript, DirectionsService , DirectionsRenderer} from '@react-google-maps/api';
import { Component } from 'react';
import * as React from 'react';

class Directions extends Component {
  constructor (props) {
    super(props)

    this.state = {
      response: null,
      travelMode: 'DRIVING',
      origin: '',
      destination: '3593 Northcrest Rd'
    }

    this.directionsCallback = this.directionsCallback.bind(this)
    this.checkDriving = this.checkDriving.bind(this)
    this.checkBicycling = this.checkBicycling.bind(this)
    this.checkTransit = this.checkTransit.bind(this)
    this.checkWalking = this.checkWalking.bind(this)
    this.getOrigin = this.getOrigin.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onMapClick = this.onMapClick.bind(this)
  }

  directionsCallback (response) {


    if (response !== null) {
      if (response.status === 'OK') {
        this.setState(
          () => ({
            response
          })
        )
      } else {
        console.log('response: ', response)
      }
    }
  }





  checkDriving ({ target: { checked } }) {
    checked &&
      this.setState(
        () => ({
          travelMode: 'DRIVING'
        })
      )
  }

  checkBicycling ({ target: { checked } }) {
    checked &&
      this.setState(
        () => ({
          travelMode: 'BICYCLING'
        })
      )
  }

  checkTransit ({ target: { checked } }) {
    checked &&
      this.setState(
        () => ({
          travelMode: 'TRANSIT'
        })
      )
  }

  checkWalking ({ target: { checked } }) {
    checked &&
      this.setState(
        () => ({
          travelMode: 'WALKING'
        })
      )
  }

  getOrigin (ref) {
    this.origin = ref
  }



  onClick () {
    if (this.origin.value !== '') {
      this.setState(
        () => ({
          origin: this.origin.value,
          destination: '3593 Northcrest Rd Doraville, GA 30340'
        })
      )
    }
  }

  onMapClick (...args) {
    console.log('onClick args: ', args)
  }

  render () {
    return (
      <LoadScript
      googleMapsApiKey="AIzaSyBfk0grmexq3WAJtUiLFzl2JVUHyAGSrh8"
    >
    <div id="right-panel"></div>

      <div className='map' name="map">



        <div className='map-container'>
          <GoogleMap

            mapContainerStyle={{
              height: '230px',
              width: '100%',

            }}

            zoom={17}

            center={{
              lat: 33.8962765,
              lng: -84.2500868
            }}


          >
            {
              (


                this.state.origin !== ''
              ) && (
                <DirectionsService

                  options={{
                    destination: this.state.destination,
                    origin: this.state.origin,
                    travelMode: this.state.travelMode
                  }}

                  callback={this.directionsCallback}


                />
              )
            }

            {
              this.state.response !== null && (
                <DirectionsRenderer

                  options={{
                    directions: this.state.response
                  }}
                />
              )
            }
          </GoogleMap>
        </div>
      </div>
      </LoadScript>
    )
  }
}
export default Directions;
