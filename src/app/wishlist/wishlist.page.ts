//imports
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonCard, IonCardHeader,IonButton,IonIcon, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';
import { camera } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { logoInstagram } from 'ionicons/icons';
import { logoFacebook } from 'ionicons/icons';
import { logoSnapchat } from 'ionicons/icons';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: true,
  imports: [ RouterLink, IonContent, IonCard,IonButton,IonIcon, IonCardHeader,IonCardTitle, IonCardContent, CommonModule, FormsModule]
})
export class WishlistPage implements OnInit {
  //variables
  myStatus:string[] = [];
  photo: string | undefined;
  selectedEvent: any = null;
  //constructor - hold storage
  constructor(private storage:Storage) { 
    addIcons({ camera, logoFacebook, logoInstagram, logoSnapchat});
  }

  ngOnInit() {
  }

//function to get storage data
async ionViewWillEnter() {
  await this.storage.create();
  this.selectedEvent = await this.storage.get('selectedEvent');
}

//function to get photo
async takePicture() {
  
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    
  
}

}



