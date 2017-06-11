
import * as abc from "abc";

export class App {
    static sayGoodbye() {
        console.log("goodbye from App.ts");
    }
}

abc.sayHello();
App.sayGoodbye();