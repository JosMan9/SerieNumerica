import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  @Input() serieN = 0;
  @Input() primo = 0;
  @Input() triangular = 0;
  @Input() fibonacci = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
