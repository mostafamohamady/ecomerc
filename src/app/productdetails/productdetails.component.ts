import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      console.log(params.get('id'));
    });
  }
}
  