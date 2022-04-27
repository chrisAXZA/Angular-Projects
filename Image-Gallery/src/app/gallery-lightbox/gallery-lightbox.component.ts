import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss']
})
export class GalleryLightboxComponent implements OnInit {

  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightBoxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalImageCount =  this.galleryData.length;
  }

  public onPreviewImage(index: number): void {
    // shows image
    this.currentIndex = index; 
    this.currentLightBoxImage  = this.galleryData[index];
  }
}
