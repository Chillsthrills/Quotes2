import { Component, OnInit, Input } from '@angular/core';
import {Entry} from '../entry'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  upVoteCount = -1;
  downVoteCount = -1;
  upVoteString = "";
  downVoteString = "";

  upVoteFunction(){
  this.upVoteCount = this.upVoteCount + 1;
  this.upVoteString = ""+this.upVoteCount;

}

downVoteFunction(){
  this.downVoteCount = this.downVoteCount + 1;
  this.downVoteString = ""+this.downVoteCount;

}

  constructor() { }

  ngOnInit() {
  }

}
