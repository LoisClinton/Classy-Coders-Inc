class Employees {
  #salary;
  #isHired;

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    switch (command) {
      case "hire":
        this.#isHired = true;
        break;

      case "fire":
        this.#isHired = false;
        break;

      default:
        break;
    }
  }
}

module.exports = {
  Employees,
};
