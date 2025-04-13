import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WishlistPage implements OnInit {
  myStatus:string = "";

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

   //method to get storage
   async ionViewWillEnter() {

    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }
}
