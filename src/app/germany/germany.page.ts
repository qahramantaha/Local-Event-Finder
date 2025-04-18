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

@Component({
  selector: 'app-germany',
  templateUrl: './germany.page.html',
  styleUrls: ['./germany.page.scss'],
  standalone: true,
  imports: [ IonActionSheet, FormsModule, RouterLink, IonContent, IonButton, IonList, IonRadioGroup, IonRadio, IonItem, IonLabel, IonIcon ],
})
export class GermanyPage implements OnInit {

  events:any[] = [];
  status:string="";
  name:string="";
  constructor(private serviceservice:ServiceService, private storage:Storage, private router:Router) {
    addIcons({ heartCircleOutline, logoInstagram, logoFacebook, logoSnapchat })
  }


  ngOnInit(): void {
    
    this.serviceservice.getEventData().subscribe(
       (data) => {
      console.log('API Response:', data); // Debug log
      this.events = data.partylist;
    });

    
  }

  //button to save data to storage and navigate back to home page
  async onButtonClick() {
   
    await this.storage.create();
    await this.storage.set('status', this.status);
    this.router.navigateByUrl('/wishlist');
  }

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
