import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { NotificationService } from '../shared/notification.service';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

    showValidationErrors!: boolean;

    constructor(
        private todoService: TodoService,
        private notificationService: NotificationService,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    onFormSubmit(form: NgForm) {
        if (form.invalid) {
            this.showValidationErrors = true;
        } else {
            const todo = new Todo(form.value.text);
            this.todoService.addTodo(todo);
            this.notificationService.show('A new Todo has been added!');
            this.router.navigateByUrl('/todos');
        }
    }
}
