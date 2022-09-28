import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { Todo } from './todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoService implements OnDestroy {

    // todos: Todo[] = [
    //     new Todo('This is a test!'),
    //     new Todo('A second todo on your list!'),
    // ];
    todos: Todo[] = [];
    storageListenerSub: Subscription;

    constructor() {
        this.loadState();

        this.storageListenerSub = fromEvent<StorageEvent>(window, 'storage')
            .subscribe((event: StorageEvent) => {
                console.log(`Storage event in Todos fired! >>>`);

                if (event.key === 'todos') {
                    this.loadState();
                }
            });
    }

    ngOnDestroy() {
        if (this.storageListenerSub) {
            this.storageListenerSub.unsubscribe();
        }
    }

    getTodos() {
        return this.todos;
    }

    getTodo(id: string): Todo {
        const todo = this.todos.find((t) => t.id === id);
        return todo!;
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
        this.saveState();
    }

    updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
        const todo = this.getTodo(id);
        Object.assign(todo, updatedTodoFields);
        this.saveState();
    }

    deleteTodo(id: string) {
        const todoIndex = this.todos.findIndex((t) => t.id === id);

        if (todoIndex === -1) {
            return;
        }

        this.todos.splice(todoIndex, 1);
        this.saveState();
    }

    saveState() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadState() {
        try {
            const todosInStorage = JSON.parse(localStorage.getItem('todos')!);

            this.todos.length = 0;
            this.todos.push(...todosInStorage);
        } catch (error) {
            console.log(`Error occurred when retrieving todos data from localStorage! >>> ${error}`);
        }
    }
}
