import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Output() getToken = new EventEmitter();


  constructor() {
  }

  public auth(): any {
    this.getToken.emit();
  }

  ngOnInit(): void {
  }

}
