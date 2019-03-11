export class EventData{
    title: string;
    description: string;
    price: string;
    phone: string;
    url: string;
    location: EventLocation;
    displayTime: string;
    sortTime: string;

}

export class EventLocation{
    name;
    address;
    addressSupplement;
    city;
    state;
    zip;
    phone;
    latitude;
    longitude;
    description;
}