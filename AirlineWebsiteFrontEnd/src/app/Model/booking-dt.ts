import { Passenger } from "./passenger";

export class BookingDt {
    noOfpassenger:number;
    cost:number;
    userId:number;
    flightId:number;
    emailId:String;
    travelClass:String;
    passengerList:Passenger[];
}
