import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-grid-search',
  templateUrl: './list-grid-search.component.html',
  styleUrls: ['./list-grid-search.component.scss']
})
export class ListGridSearchComponent implements OnInit {
  @Input() service: any;

  constructor() {}

  ngOnInit() {}
}
