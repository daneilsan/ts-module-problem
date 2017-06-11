
import * as abc from "../custom_types/abc";

export class App {
    static sayGoodbye() {
        console.log("goodbye from App.ts");
    }
}

abc.sayHello();
App.sayGoodbye();