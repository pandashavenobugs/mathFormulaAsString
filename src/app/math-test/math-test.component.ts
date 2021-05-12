import { Component, OnInit } from '@angular/core';
import * as string_math from 'string-math';
@Component({
  selector: 'app-math-test',
  templateUrl: './math-test.component.html',
  styleUrls: ['./math-test.component.scss'],
})
export class MathTestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const x = 'x+20';

    console.log(typeof string_math(x.replace('x', '20')));
    console.log(string_math(x.replace('x', '20')));
  }
}
