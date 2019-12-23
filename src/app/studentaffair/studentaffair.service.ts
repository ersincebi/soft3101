import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StudentaffairService {

  constructor(private db : AngularFireDatabase) { }



}