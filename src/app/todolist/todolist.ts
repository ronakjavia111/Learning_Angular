import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})
export class Todolist {
  todo: string = '';
  todoList: { id: number; name: string }[] = [];

  addTodo(val: string) {
    this.todoList.push({ id: this.todoList.length + 1, name: val });
    this.todo = '';
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter((item) => item.id != id);
  }
}
