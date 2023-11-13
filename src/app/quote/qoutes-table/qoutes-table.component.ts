import { Component } from '@angular/core';
import { Quote } from 'src/app/model/quote.model';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-qoutes-table',
  templateUrl: './qoutes-table.component.html',
  styleUrls: ['./qoutes-table.component.css']
})
export class QoutesTableComponent {
  quotes?: Quote[];

  constructor(private quoteService: QuoteService){}

  ngOnInit(): void {
    this.getAllQuote();
  }

  getAllQuote(): void {
    this.quoteService.getAll().subscribe(
      data => {
        this.quotes = data;
      }
    )
  }

  deleteQuote(quoteId: any): void {
    console.log(quoteId, 'rest');
    this.quoteService.delete(quoteId).subscribe(
      data => {
        console.log(data, 'data');
        this.getAllQuote()
      }
    )
  };
}
