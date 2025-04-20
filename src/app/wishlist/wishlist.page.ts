//imports
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonCard, IonCardHeader,IonButton,IonIcon, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';
import { PhotoService } from '../services/photo.service';
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
  myStatus:string[] = [];
  photo: string | undefined;

  myWishlist:any = null;
  //constructor - hold storage
  constructor(private storage:Storage, public photoService: PhotoService) { 
    addIcons({ camera, logoFacebook, logoInstagram, logoSnapchat});
  }

  ngOnInit() {
  }

selectedEvent: any = null;

async ionViewWillEnter() {
  await this.storage.create();
  this.selectedEvent = await this.storage.get('selectedEvent');
}

async takePicture() {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    
    this.photo = image.webPath;
  } catch (error) {
    console.log('Camera error:', error);
  }
}

}



