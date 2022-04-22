import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carousel';

  images = [
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2021/08/08/20/37/mountains-6531903_960_720.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115_960_720.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_960_720.jpg',
      imageAlt: 'nature3',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2021/09/20/21/32/lake-6641880_960_720.jpg',
      imageAlt: 'nature4',
    },
  ];
}
