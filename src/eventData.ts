export class EventData{
    id: string;
    title: string;
    description: string;
    price: string;
    phone: string;
    url: string;
    location: EventLocation;
    displayTime: string;
    sortTime: string;
    date: Date;
}

export class EventLocation{
    name: string;
    address: string;
    addressSupplement: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    latitude: string;
    longitude: string;
    description: string;
}
