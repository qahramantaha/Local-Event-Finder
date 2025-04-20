//imports
import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonList, IonRadioGroup, IonRadio, IonItem, IonLabel, IonIcon  } from '@ionic/angular/standalone';
import { ServiceService } from '../service.service';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { heartCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { logoInstagram } from 'ionicons/icons';
import { logoFacebook } from 'ionicons/icons';
import { logoSnapchat } from 'ionicons/icons';
import { IonActionSheet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ CommonModule, IonActionSheet, FormsModule, RouterLink, IonContent, IonButton, IonList, IonRadioGroup, IonRadio, IonItem, IonLabel, IonIcon ],
})
export class HomePage implements OnInit {

  //variables
  events:any[] = [];
  status:string="";
  name:string="";
   selectedEvent:any="";
  //constructor - service for data - storage for sotring data - router for routing/navigation
      //add icons to the page
  constructor(private serviceservice:ServiceService, private storage:Storage, private router:Router) {
    addIcons({ heartCircleOutline, logoInstagram, logoFacebook, logoSnapchat })
  }


  //get the event data from the file 
  ngOnInit(): void {
    
    this.serviceservice.getEventData().subscribe(
       (data) => {
      this.events = data.partylist;
    });

    
  }

  //button to save data to storage and navigate back to home page
async onButtonClick() {
  console.log("Selected event index: " + this.status);
  
  const eventIndex = parseInt(this.status.replace('event', ''));
    const selectedEvent = this.events[eventIndex];
  
  await this.storage.create();
  await this.storage.set('selectedEvent', selectedEvent);
  
  this.router.navigateByUrl('/wishlist');
}

  // This defines the buttons for an (popup menu)
// Each button has text, an optional role,
// and data that gets passed when clicked.
  public actionSheetButtons = [
    {
      text: 'Follow',
      role: 'follow',
      data: {
        action: 'Follow',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

 
}
