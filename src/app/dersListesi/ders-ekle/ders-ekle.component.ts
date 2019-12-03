import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-ders-ekle',
  templateUrl: './ders-ekle.component.html',
  styleUrls: ['./ders-ekle.component.css']
})
export class DersEkleComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
