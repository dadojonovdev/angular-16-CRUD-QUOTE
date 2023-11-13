import { Component } from '@angular/core';
import { Quote } from 'src/app/model/quote.model';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qoute-add',
  templateUrl: './qoute-add.component.html',
  styleUrls: ['./qoute-add.component.css']
})
export class QouteAddComponent {
  quote: Quote = {
    title: '',
    author: '',
    genre: '',
    created_at: '',
  };

  toastSuccess: boolean = false;

  constructor(
    private quoteService: QuoteService, 
    private router: Router
  ) {}

  addQuote(): void {

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    console.log('currentDate', formattedDate);
    
    const data = {
      title: this.quote.title,
      author: this.quote.author,
      genre: this.quote.genre,
      created_at: formattedDate
    }


    this.quoteService.createQuote(data).subscribe(
      data => {
        this.switchToast()
      }
    )
  }

  switchToast(): void{
    this.toastSuccess = true

    setTimeout(() => {
      this.toastSuccess = false
      this.router.navigate(['/']);
    }, 1000)
  }
  
}
