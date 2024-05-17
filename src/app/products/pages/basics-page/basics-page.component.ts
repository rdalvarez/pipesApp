import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

    public nameLower: string = 'david';
    public nameUpper: string='david';
    public fullName: string = 'rIcArDo DaViD AlVaReZ';


    public customDate: Date = new Date();
}
