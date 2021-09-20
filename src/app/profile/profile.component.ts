import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   edit = true;
   editInfo = true;
   EditLinks(){

    this.edit =! this.edit;

   }

   EditInfo(){

    this.editInfo =! this.editInfo;

   }
  constructor() { }

  ngOnInit(): void {
  }


}
