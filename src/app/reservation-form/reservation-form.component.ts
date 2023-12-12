import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup ({});
  constructor (private formBuilder : FormBuilder, private reservationService : ReservationService,
    private router : Router,
    private activatedRoute: ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      checkInDate : new FormControl('', Validators.required),
    checkOutDate : new FormControl('', Validators.required),
    guestName: new FormControl('', Validators.required),
    guestEmail : new FormControl('', [Validators.required, Validators.email]),
    roomNumber : new FormControl('', Validators.required)


    })
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id) {
      let reservation = this.reservationService.getReservationById(id)
      if(reservation) {
        this.loginForm.patchValue(reservation)
      }
     
    }
  }
  onSubmit()
  {
   if (this.loginForm.valid)
   { let reservation : Reservation = this.loginForm.value;
    let id = reservation.id
   if(id) { 
    
     this.reservationService.updateReservation(id ,reservation)
    
   }else {
    
    this.reservationService.addReservation(reservation)


   }
      this.router.navigate(["/list"]);

   }
   



  }

}
