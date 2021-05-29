// Typical Typescript File

/**
 * Interface definitions
 * for working with this
 * class
 */
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    markerContent(): string;
}

/**
 * Class definition
 * who works with the interfaces declared previously
 */
export class CustomMap {
    private readonly googleMap: google.maps.Map;

    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divID)!, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }

    addMaker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker);
        })
    }
}