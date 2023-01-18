import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuckyService } from '../../lucky.service';

@Component({
  selector: 'app-lucky.child1',
  standalone: true,
  imports: [CommonModule],
  providers: [LuckyService], // removing this one will provide parent component instance of the service
  templateUrl: './lucky.child1.component.html',
  styleUrls: ['./lucky.child1.component.scss']
})
export class LuckyChild1Component {
  constructor(public luckyService: LuckyService) {
    luckyService.beVeryLucky();
  }
}
