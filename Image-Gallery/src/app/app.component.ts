import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Image-Gallery';

  data: Item[] = [
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2021/02/03/01/01/travel-5976081_960_720.jpg',
      imageAlt : '1',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2021/02/27/16/28/desert-6055092_960_720.jpg',
      imageAlt : '2',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2020/07/13/05/54/outdoors-5399539_960_720.jpg',
      imageAlt : '3',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2015/07/07/07/49/wood-834073_960_720.jpg',
      imageAlt : '4',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg',
      imageAlt : '5',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_960_720.jpg',
      imageAlt : '6',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2021/12/19/12/27/road-6881040_960_720.jpg',
      imageAlt : '7',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2016/11/21/14/57/wheat-1845835_960_720.jpg',
      imageAlt : '8',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2014/08/26/15/28/jam-428094_960_720.jpg',
      imageAlt : '9',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2014/12/11/02/55/cereals-563796_960_720.jpg',
      imageAlt : '10',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_960_720.jpg',
      imageAlt : '11',
    },
    {
      imageSrc: 'https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_960_720.jpg',
      imageAlt : '12',
    },
  ];
}
