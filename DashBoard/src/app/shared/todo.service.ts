import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    todos: Todo[] = [
        new Todo('This is a test!'),
        new Todo('A second todo on your list!'),
    ];

    constructor() { }

    getTodos() {
        return this.todos;
    }

    getTodo(id: string): Todo{
        const todo = this.todos.find((t) => t.id === id);
        return todo!;
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
        const todo = this.getTodo(id);
        Object.assign(todo, updatedTodoFields);
    }

    deleteTodo(id: string) {
        const todoIndex = this.todos.findIndex((t) => t.id === id);

        if (todoIndex === -1) {
            return;
        }

        this.todos.splice(todoIndex, 1);
    }
}
