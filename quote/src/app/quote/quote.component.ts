import { Component, OnInit } from '@angular/core';
import {Entry} from '../entry'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Entry []=[
    new Entry("this is a new quote",new Date(),'paul','James'),
    new Entry('this is a second quote',new Date,'angela',"paul"),
]

addnewentry(entry: any){
  this.quotes.push(entry);
}

  constructor() { }

  ngOnInit() {
  }

}
