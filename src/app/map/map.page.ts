import { ModalController } from '@ionic/angular';
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable quote-props */
/* eslint-disable prefer-const */
/* eslint-disable new-parens */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map;
  options = {
    componentRestrictions: { country: "bh" },
    fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
    types: ["establishment"],
  } as google.maps.places.AutocompleteOptions;
    private geoCoder;
    location = {
    latitude: 19.0760,
    longitude: 72.8777,
    zoom: 200,
    isFullScreen: true,
    markers: [
      {
        lat: 19.0760,
        lng: 72.8777,
        draggable: true
      }
    ]
  };
  @ViewChild('search',{static:false})
  public searchElementRef: ElementRef;
  mapClickListener: any;
constructor(private modalController: ModalController, private zone: NgZone,private mapsAPILoader: MapsAPILoader,
  private ngZone: NgZone
  ) { }
  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement,
        this.options);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.location.latitude = place.geometry.location.lat();
          this.location.longitude = place.geometry.location.lng();
          this.location.markers[0].lat = place.geometry.location.lat();
          this.location.markers[0].lng = place.geometry.location.lng();
          this.location.zoom = 18;
        });
      });
    });
  }

private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location.latitude = position.coords.latitude;
        this.location.longitude = position.coords.longitude;
        this.location.markers[0].lat =position.coords.latitude;
          this.location.markers[0].lng = position.coords.longitude;
        this.location.zoom = 8;
        this.getAddress(this.location.latitude, this.location.longitude);
      });
    }
  }
  markerDragEnd($event: google.maps.MouseEvent) {
    console.log($event);
    this.location.markers[0].lat = $event.latLng.lat();
    this.location.markers[0].lng = $event.latLng.lng();
    this.getAddress(this.location.latitude, this.location.longitude);
  }
  /**mapClicked($event: google.maps.MouseEvent) {
    console.log($event);
    this.location.markers[0].lat = $event.latLng.lat();
    this.location.markers[0].lng = $event.latLng.lng();
    this.getAddress(this.location.latitude, this.location.longitude);
  }*/
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.location.zoom = 12;
          //this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }


  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      this.zone.run(() => {
        this.location.markers[0].lat = e.latLng.lat();
        this.location.markers[0].lng = e.latLng.lng();
        // Here we can get correct event
        console.log(e.latLng.lat(), e.latLng.lng());
      });
    });
  }
save(){
  this.modalController.dismiss(this.location.markers[0]);
}
cancel(){
  this.modalController.dismiss('cancel');
}
  public ngOnDestroy(): void {
    if (this.mapClickListener) {
      this.mapClickListener.remove();
    }
  }
}
