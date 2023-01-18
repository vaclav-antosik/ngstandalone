import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuckyService } from './lucky.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lucky',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [LuckyService], // removing this one will provide root instance of the service
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.scss']
})
export class LuckyComponent {
  constructor(public luckyService: LuckyService) { }
}
