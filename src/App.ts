/*/// <reference path="abc.d.ts"/>
import * as abc from "abc"; */

// import {abc} from "./abc";

import * as abc from "./abc";


class App {
    static sayGoodbye() {
        console.log("goodbye from App.ts");
    }
}

abc.abc.sayHello();
App.sayGoodbye();