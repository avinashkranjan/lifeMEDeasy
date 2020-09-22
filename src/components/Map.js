import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const mapStyles={
  width: '100%',
  heigth: '100%'
}

class CurrentLocation extends Component {
  
    constructor(props) {
        super(props);
    
        const { lat, lng } = this.props.initialCenter;
    
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        };
      }
      componentDidUpdate(prevProps, prevState){
          if(prevProps.google!=this.props.google){
              this.loadMap();
          }
          if(prevState.currentLocation!==this.state.currentLocation){
              this.recenterMap();
          }
      }
      recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;
    
        if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
        }
      }
      componentDidMount(){
          if(this.props.centerAroundCurrentLOcation){
              if(navigator && navigator.geolocation){
                  navigator.geolocation.getCurrentPosition(pos=>{
                      const coords=pos.coords;
                      this.setState({
                          currentLocation:{
                              lat: coords.latitude,
                              lng: coords.longitude
                          }
                      });
                  });
              }
          }
          this.loadMap();
      }
      loadMap(){
          if(this.props && this.props.google){
              const{google}=this.props;
              const maps=google.maps;
              const mapRef=this.refs.map;
              const node=ReactDOM.findDOMNode(mapRef);
              let{zoom}=this.props;
              const{lat, lng}=this.state.currentLocation;
              const center=new maps.LatLng(lat, lng);
              const mapConfig=Object.assign(
                  {},
                  {
                      center: center,
                      zoom: zoom
                  }
              );
              this.map=new maps.Map(node, mapConfig);
          }
      }
      renderChildren() {
        const { children } = this.props;
    
        if (!children) return;
    
        return React.Children.map(children, c => {
          if (!c) return;
    
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        });
      }
      render() {
        const style = Object.assign({}, mapStyles.map);
    
        return (
          <div>
            <div style={style} ref="map">
              Loading map...
            </div>
            {this.renderChildren()}
          </div>
        );
      }
    }
    CurrentLocation.defaultProps = {
      zoom: 14,
      initialCenter: {
        lat: 0,
        lng: 0
      },
      centerAroundCurrentLocation: false,
      visible: true
    }
export default CurrentLocation




