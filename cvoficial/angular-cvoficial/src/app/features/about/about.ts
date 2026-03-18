<<<<<<< HEAD
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CV } from '../../data/cvoficial-data';
import { QuoteService } from '../../services/quote';
import { TruncatePipe } from '../../Pipes/truncate-pipe';
import { CommonModule, isPlatformBrowser } from '@angular/common';
=======
import { Component } from '@angular/core';
import { CV } from '../../data/cvoficial-data';
>>>>>>> origin/dev

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
<<<<<<< HEAD
  styleUrls: ['./about.scss'],
  imports: [TruncatePipe, CommonModule]
})
export class About implements AfterViewInit {

  cv = CV;
  quote: string = '';

  constructor(
    private quoteService: QuoteService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadQuote();
    }
  }

  loadQuote() {
    this.quoteService.getQuote().subscribe((data: any) => {
      this.quote = data.slip.advice;
    });
  }
=======
  styleUrl: './about.scss'
})
export class About {
  cv = CV;
>>>>>>> origin/dev
}