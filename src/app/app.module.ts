import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const firebaseConfig = {
  apiKey: "AIzaSyCsTfDyAV8z72u0UlB8dHVOKKvrguReMTY",
  authDomain: "frases-2e227.firebaseapp.com",
  projectId: "frases-2e227",
  storageBucket: "frases-2e227.appspot.com",
  messagingSenderId: "793182217084",
  appId: "1:793182217084:web:bc055799152a99f6a4faf9",
  measurementId: "G-825H7VPRQH"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
