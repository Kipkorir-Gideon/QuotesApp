import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes('Philosophy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Anonymous', new Date(2021,10,8), 0, 0, 'Ngetich'),
    new Quotes('Philosophy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Anonymous', new Date(2021,10,8), 0, 0, 'Ngetich'),
    new Quotes('Philosophy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Anonymous', new Date(2021,10,8), 0, 0, 'Ngetich'),
    new Quotes('Philosophy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Anonymous', new Date(2021,10,8), 0, 0, 'Ngetich')
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

  constructor() { }

  ngOnInit(): void {
  }

}
