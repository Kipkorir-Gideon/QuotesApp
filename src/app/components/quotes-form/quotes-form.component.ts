import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../models/quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quotes('', '', '', new Date(), 0, 0, '');
  @Output() add = new EventEmitter<Quotes>();

  addQuote() {
    this.add.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
