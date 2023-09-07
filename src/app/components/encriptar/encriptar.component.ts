import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-encriptar',
  templateUrl: './encriptar.component.html',
  styleUrls: ['./encriptar.component.css']
})
export class EncriptarComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  userInput: string = '';
  copiedText: string = '';

  encriptar() {
    var dato = this.userInput;
    this.appService.postEncriptar(dato).subscribe((response) => {
      console.log(response)
      this.copiedText = response.frase;
      this.userInput = "";
    });
  }

  desencriptar() {
    var dato = this.userInput;
    this.appService.postDesencriptar(dato).subscribe((response) => {
      console.log(response)
      this.copiedText = response.frase;
    });
  }
}
