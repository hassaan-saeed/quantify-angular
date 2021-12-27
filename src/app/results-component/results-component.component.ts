import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface SubAccount {
  category: string;
  template_name: string;
  image_path: string;
  count: number;
}



const ELEMENT_DATA: SubAccount[] = [
  {category: 'wood', template_name: 'logs', image_path: 'new123.jpg', count: 52},
  {category: 'wood', template_name: 'logs', image_path: 'new123.jpg', count: 74},
  {category: 'wood', template_name: 'planks', image_path: 'new123.jpg', count: 16},
  {category: 'wood', template_name: 'planks', image_path: 'new123.jpg', count: 19},
  {category: 'beams', template_name: 'channels', image_path: 'new123.jpg', count: 20},
  {category: 'beams', template_name: 'rebars', image_path: 'new123.jpg', count: 32},
  {category: 'beams', template_name: 'rebars', image_path: 'new123.jpg', count: 38},
  {category: 'tubes', template_name: 'test tubes', image_path: 'new123.jpg', count: 110},
  {category: 'tubes', template_name: 'test tubes', image_path: 'new123.jpg', count: 135},
  {category: 'tubes', template_name: 'pop tubes', image_path: 'new123.jpg', count: 23},
  {category: 'layers', template_name: 'curved line', image_path: 'new123.jpg', count: 18},
  {category: 'layers', template_name: 'horizontal line', image_path: 'new123.jpg', count: 12},
];


@Component({
  selector: 'app-results-component',
  templateUrl: './results-component.component.html',
  styleUrls: ['./results-component.component.css']
})
export class ResultsComponentComponent implements OnInit {

  displayedColumns: string[] = ['demo-category', 'demo-template', 'demo-image', 'demo-count'];
  dataSource = ELEMENT_DATA;

  hide = true;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
