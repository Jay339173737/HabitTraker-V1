export class Habit {
  constructor(name) {
    this.name = name;
    this.done = false;
    this.streak = 0;
  }

  toggle() {
    if (this.done) {
      this.done = false;
      this.streak = this.streak - 1;
    } else {
      this.done = true;
      this.streak = this.streak + 1;
    }
  }
}
