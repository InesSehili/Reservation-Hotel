import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservations : Reservation[] = [];

  //CRUD

  getReservationById(id:string) : Reservation | undefined
  {
   return this.reservations.find(res => res.id === id)
  }

  getAllReservations() : Reservation[]

  {
   return this.reservations;
  }
   addReservation( res : Reservation) : void
   {
      this.reservations.push(res);
   }
   deleteReservation(id:string) : void {

    let index = this.reservations.findIndex(res => res.id === id );
    this.reservations.splice(index, 1)

   }
   updateReservation (updatedReservation : Reservation) :void
   {
      let index = this.reservations.findIndex(res => res.id === updatedReservation.id)
      this.reservations[index] = updatedReservation


   }

}
