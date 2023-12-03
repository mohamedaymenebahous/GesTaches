import { Component } from '@angular/core';
import {Todo} from "../../../models/todo-module/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoList: Todo[] = [
    new Todo('Faire des exercices', 'Faire des exercices de revision pour les examens',new Date(2023, 12, 3, 8, 30), new Date(2023, 12, 3, 10, 30), 1, false),
    new Todo('Aller a la salle de sport', '', new Date(2023, 12, 3, 12, 30), new Date(2023, 12, 3, 14, 30),  2, false),
    new Todo('Visiter des amis', '', new Date(2023, 12, 3, 15, 30), new Date(2023, 12, 3, 16, 30), 3, false),
    new Todo('Lire un roman', '', new Date(2023, 12, 3, 17, 0), new Date(2023, 12, 3, 18, 0), 1, true),
    new Todo('Detente', '',new Date(2023, 12, 3, 18, 0), new Date(2023, 12, 3, 19, 0), 2, false),
    new Todo('Faire les courses', '', new Date(2023, 12, 3, 19, 0), new Date(2023, 12, 3, 21, 0), 3, true)
  ]

  todoListToJson: Todo[] =[
    {title: 'Faire des exercices', description: 'Faire des exercices de revision pour les examens', dateOfCreation: new Date(2023, 12, 3, 8, 30), deadline: new Date(2023, 12, 3, 10, 30), priority: 1, done: false},
  ]

  displayedColumns: string[] = ['title', 'Description', 'Date de création', 'Date d\'écheance', 'Priorité', 'Status'];
  dataSource = this.todoListToJson;
}
