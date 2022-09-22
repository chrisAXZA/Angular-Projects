import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { NotificationService } from '../shared/notification.service';

@Component({
    selector: 'app-edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

    todo!: Todo;

    constructor(
        private route: ActivatedRoute,
        private todoService: TodoService,
        private notificationService: NotificationService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            const todoId = paramMap.get('id');
            // alert(todoId);
            this.todo = this.todoService.getTodo(todoId!);
        });
    }

    onFormSubmit(form: NgForm) {
        if (form.invalid) {
            return;
        }

        this.todoService.updateTodo(this.todo.id, form.value);
        this.notificationService.show(`${this.todo.text} has been updated!`);
        this.router.navigateByUrl('/todos');
    }
}
