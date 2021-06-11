class Parent {
  constructor() {
    this.gender = "male";
  }

  showGender() {
    console.log(this.gender);
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = "asish";
    this.gender = "unknown";
  }

  showName() {
    console.log(this.name);
    console.log(this.gender);
  }
}

const ch = new Child();

class Grand {
  name = "coder";

  showName = () => {
    console.log(this.name);
  };
}

class GrandChild extends Grand {
  name = "developer";

  showFunc = () => {
    console.log(this.name);
  };
}

const gc = new GrandChild();
gc.showFunc();
gc.showName();
