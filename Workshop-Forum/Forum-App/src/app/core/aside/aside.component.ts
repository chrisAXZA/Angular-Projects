import { Component, Input, TemplateRef } from '@angular/core';
// import { IPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent<T>{

  @Input() title!: string;
  @Input() items: T[] | undefined;
  // @Input() items: IPost[] | undefined;
  @Input() itemTemplateRef!: TemplateRef<{ $implicit: T }>;

  constructor() { }

  ngOnInit(): void {
  }

}
