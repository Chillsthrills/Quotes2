import { Component, OnInit } from '@angular/core';
import {Entry} from '../entry'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Entry []=[]

addnewentry(entry: any){
  this.quotes.push(entry);
}
delete(index){
  this.quotes.splice(index,1);
}

  constructor() { }

  ngOnInit() {
  }

}
