import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonList, IonRadioGroup, IonRadio, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ServiceService } from '../service.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ RouterLink, IonContent, IonButton, IonList, IonRadioGroup, IonRadio, IonItem, IonLabel],
})
export class HomePage implements OnInit {

  events:any[] = [];
  

  constructor(private serviceservice:ServiceService) {}


  ngOnInit(): void {
    
    this.serviceservice.getEventData().subscribe(
       (data) => {
      console.log('API Response:', data); // Debug log
      this.events = data.partylist;
    });

    
  }


  
 

 
}
