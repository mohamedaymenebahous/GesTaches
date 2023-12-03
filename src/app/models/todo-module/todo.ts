export class Todo {
  constructor(
    public title: string,
    public description: string,
    public dateOfCreation: Date,
    public deadline: Date,
    public priority: number,
    public done: boolean
  ) {
  }
}
