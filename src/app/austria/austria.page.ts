import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonList, IonRadioGroup, IonRadio, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-austria',
  templateUrl: './austria.page.html',
  styleUrls: ['./austria.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonContent, IonButton, IonList, IonRadioGroup, IonRadio, IonItem, IonLabel],
})
export class AustriaPage implements OnInit {

  events:any[] = [];

  constructor(private serviceservice:ServiceService, private storage:Storage) {}

  ngOnInit(): void {
    
    this.serviceservice.getEventData().subscribe(
       (data) => {
      console.log('API Response:', data); // Debug log
      this.events = data.partylist;
    });

    
  }
}
