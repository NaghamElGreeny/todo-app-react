export class Task {
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;

  constructor(title: string, id: string =  this.id = crypto.randomUUID(), completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  toggle(): Task {
    return new Task(this.title, this.id, !this.completed);
  }

  updateTitle(newTitle: string): Task {
    return new Task(newTitle, this.id, this.completed);
  }
}
