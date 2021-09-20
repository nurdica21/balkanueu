import { Component } from "@angular/core";


@Component({

    selector: 'app-header',
    templateUrl : './header.component.html',
    styleUrls: ['/header.component.css']

})

export class HeaderComponent{


    toogle = true;
    toogleMenu = true;
    toogleM(){
 
     this.toogle =! this.toogle;
 
    }

}