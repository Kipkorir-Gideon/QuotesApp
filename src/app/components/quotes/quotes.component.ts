import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes('Life', '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”', 'Thomas A. Edison', new Date(2021,5,18), 0, 0, 'Ngetich'),
    new Quotes('Philosophy', '“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.”', 'Buddha', new Date(2021,6,12), 0, 0, 'Gideon'),
    new Quotes('Inspirational', '“Inspiration comes from within yourself. One has to be positive. When you are positive, good things happen.”', 'Deep Roy', new Date(2021,7,11), 0, 0, 'Maxwell'),
    new Quotes('Love', '“There are no monuments dedicated to me and my name will soon be forgotten, but I’ve loved another with all my heart and soul, and to me, this has always been enough.”', 'Nicholas Sparks', new Date(2021,8,22), 0, 0, 'Yuri')
  ]

  removeQuote(isRead: any, index:number) {
    if(isRead) {
      let toRemove = confirm(`Are you sure you want to remove ${this.quotes[index].title}?`)
      if(toRemove) {
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quotes:Quotes) {
    quotes.datePosted = new Date(quotes.datePosted)
    this.quotes.push(quotes)
  }

  currentValue:number;
  newValue:number;
  counter:number;
  highestVotes(){
    this.currentValue = 0
    this.newValue = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.newValue = this.quotes[this.counter].upvote;
      if(this.newValue > this.currentValue){this.currentValue = this.newValue}
    }
    return  this.currentValue
  }

  constructor() { }

  ngOnInit(): void {
  }

}
