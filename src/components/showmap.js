import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class ShowMap extends Component {
    render() {
        return (
            <div>
            <Map google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick} name={'Current location'}/>
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
            </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDUuDmtrHaXrQ7Gghl3eiBMWhtq2e5SwUE')
  })(ShowMap)