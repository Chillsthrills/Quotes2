import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  author: string;
  submitted_by: string;
  new_quote: string;
  date: Date = new Date();
  quoteEntry: any;


  @Output() mEntry = new EventEmitter<Entry>();

  addnewentry(){
    this.quoteEntry = new Entry(this.new_quote, this.date, this.author, this.submitted_by);
    this.mEntry.emit(this.quoteEntry);

  }

  constructor() { }

  ngOnInit() {
  }

}
