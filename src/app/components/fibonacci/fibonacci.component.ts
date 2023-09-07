import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  userInput: number = 0;
  copiedText: string = '';

  fibonacci() {
    var dato = this.userInput;
    this.appService.postFibonacci(dato).subscribe((response) => {
      if (response.presente == true) {
        this.copiedText = "Si es un numero Fibonacci";
        this.userInput = 0;
      } else {
        this.copiedText = "No es un numero Fibonacci";
        this.userInput = 0;
      }
    });
  }

}
