import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuckyService } from '../../lucky.service';

@Component({
  selector: 'app-lucky.child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lucky.child2.component.html',
  styleUrls: ['./lucky.child2.component.scss']
})
export class LuckyChild2Component {
  constructor(public luckyService: LuckyService) {

  }
}
