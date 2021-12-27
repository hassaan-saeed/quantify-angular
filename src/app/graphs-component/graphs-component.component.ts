import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graphs-component',
  templateUrl: './graphs-component.component.html',
  styleUrls: ['./graphs-component.component.css']
})
export class GraphsComponentComponent implements OnInit {

  public data = [

    {Shop: "Amazon",                      Percent: 63},
    {Shop: "Search Engines",              Percent: 48},
    {Shop: "Retailer Sites",              Percent: 33},
    {Shop: "Other Marketplaces",          Percent: 25},
    {Shop: "At the Website of the Brand", Percent: 21},
    {Shop: "Comparison Sites",            Percent: 10},
    {Shop: "Social Media",                Percent: 8 },
    {Shop: "Other",                       Percent: 2 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
