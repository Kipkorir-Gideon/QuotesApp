import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../models/quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input()
  votes!: Quotes;
  @Output() isRead = new EventEmitter<boolean>();

  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.votes.upvote+=1;
  }
  downvote(){
    this.votes.downvote+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
