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

  constructor() { }

  ngOnInit() {
  }

}
