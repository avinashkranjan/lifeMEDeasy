 import React, {Component} from 'react';
 import {Map, InfoWindow, Marker, GoogleApiWrapper, google, map} from 'google-maps-react';
 class MapContainer extends Component {
   render() {
     return (
       <Map google={this.props.google} 
           initialCenter={{
             lat: 22.5726,
             lng: 88.3639
           }} 
           onClick={this.onMapClicked}
            zoom={14}>
             
         <Marker onClick={this.onMarkerClick}
                 name={'Current location'} 
                 position={{lat:22.5135, lng:88.4029}}
                 />

         <Marker onClick={this.onMarkerClick}
                 name={'Current location'} 
                 position={{lat:22.4944, lng:88.4008}}
                 />
          <Marker onClick={this.onMarkerClick}
                 name={'Current location'} 
                 position={{lat:22.4807, lng:88.3942}}
                 />
           <Marker onClick={this.onMarkerClick}
                 name={'Current location'} 
                 position={{lat:22.5748, lng:88.4014}}
                 />
           <Marker onClick={this.onMarkerClick}
                 name={'Current location'} 
                 position={{lat:22.5736, lng:88.3619}}
                 />
           <Marker onClick={this.onMarkerClick}
                 name={'Current location'} 
                 position={{lat:22.5205, lng:88.4009}}
                 />
 
         <InfoWindow onClose={this.onInfoWindowClose}>
          
         </InfoWindow>
       </Map>
     );
   }
 }
 
 export default GoogleApiWrapper({
   apiKey: ('AIzaSyDIkzw08u4Q7KoX8fEm8TxO5c1pXmOJ5uk')
 })(MapContainer)