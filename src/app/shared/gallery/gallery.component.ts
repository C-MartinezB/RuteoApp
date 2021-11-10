import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() imagen: any = {};
  number: number = -1;

  constructor() {
    this.number = this.getRandomNumber();
  }

  ngOnInit(): void {
  }

  getRandomNumber(){
    let number = Math.floor(Math.random()*3);
    console.log(number)
    return number;
  }

}
