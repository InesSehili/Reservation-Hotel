import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservations : Reservation[] = [];
   constructor()
   {
     let savedReservation = localStorage.getItem('reservation')
     this.reservations = savedReservation? JSON.parse(savedReservation) : []


   }
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
   {  res.id = Date.now().toString()
      this.reservations.push(res);
      localStorage.setItem('reservation', JSON.stringify(this.reservations))

   }
   deleteReservation(id:string) : void {

    let index = this.reservations.findIndex(res => res.id === id );
    this.reservations.splice(index, 1)
    localStorage.setItem('reservation', JSON.stringify(this.reservations))


   }
   updateReservation (id : string ,updatedReservation : Reservation) :void
   {
      let index = this.reservations.findIndex(res => res.id === id)
      this.reservations[index] = updatedReservation
      localStorage.setItem('reservation', JSON.stringify(this.reservations))


 
   }

}
