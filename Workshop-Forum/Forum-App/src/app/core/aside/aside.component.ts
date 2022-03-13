import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent<T>{

  @Input() title!: string;
  @Input() items: T[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
