import { Component } from '@angular/core';
import { Quote } from 'src/app/model/quote.model';
import { QuoteService } from '../quote.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent {

  quote: Quote = {
    id: this.route.snapshot.params['id'],
    title: '',
    author: '',
    genre: '',
    created_at: '',
    updated_at: ''
  };

  toastSuccess: boolean = false;

  constructor(
    private quoteService: QuoteService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getQuote(this.route.snapshot.params['id'])
  }

  getQuote(id: number): void{
    this.quoteService.get(id).subscribe(
      data => {
        this.quote = data
      }
    )
  }

  updatedQuote(id: number = this.route.snapshot.params['id']): void {
    console.log(id, 'id update');
    

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    const data = {
      title: this.quote.title,
      author: this.quote.author,
      genre: this.quote.genre,
      created_at: this.quote.created_at,
      updated_at: formattedDate
    }

    this.quoteService.update(id, data).subscribe(
      data => {
        console.log(data);
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
