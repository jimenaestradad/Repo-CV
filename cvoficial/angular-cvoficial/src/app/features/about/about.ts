import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CV } from '../../data/cvoficial-data';
import { QuoteService } from '../../services/quote';
import { TruncatePipe } from '../../Pipes/truncate-pipe';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  imports: [TruncatePipe, CommonModule],
  styleUrl: './about.scss'
})
export class About implements OnInit {

  cv = CV;
  quote: any;

  constructor(
    private quoteService: QuoteService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {

      this.quoteService.getQuote().subscribe((data:any)=>{
        console.log(data);
        this.quote = data;
      });

    }

  }

}