"use strict";
// basic types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myName = "Buzz";
let meaningOfLife;
let isLoading;
let album;
let union;
myName = "Fizz";
meaningOfLife = 42;
isLoading = true;
album = "Van Halen";
album = 1985;
union = 51;
union = "test";
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive; // 0,1 or true, false
let re = /\w+/g;
//complex types.. Arrays ,Objects
let stringArr = ["one", "hey", "fizz"];
let guitars = ["Strat", "LesPaul", 5150];
let mixedData = ["EVH", 1985, true];
stringArr[0] = "john";
stringArr.push("hey");
guitars[0] = 1985;
guitars.unshift("jim");
let test = [];
let bands = [];
bands.push("Van Halen");
// tuple
let myTuple = ["fizz", 42, true]; // types on fixed position and size/length of array
let mixed = ["john", 1, false];
// objects
let myObj;
myObj = []; // arr is also a type of object
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Fizz",
    prop2: true,
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1985, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    return `hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// Literal types
let myNameTest;
let userName;
userName = "John";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
//interface mathFunction {
//(a: number, b: number): number;
//} // interface
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameter
const addAll = (a, b, c) => {
    // optional has be last parameter
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    // default parameter
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// rest parameters  shuld also come at the end
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//custom type guard
const isNum = (value) => {
    return typeof value == "number" ? true : false;
};
// use of teh never type
const numOrStr = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNum(value))
        return "number";
    return createError("this hould never happen");
};
// convert to more or less specific
let a = "Hello";
let b = a; // less specific type
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVAl = addOrConcat(2, 2, "concat");
// carful TS sees no problem  but a string is returned
let nextVal = addOrConcat(2, 2, "add");
10; // two asssertionas double casting
// the DOM
const img = document.querySelector("img"); // !non null assertion
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img"); // tsx file in react wont work with that assertion
//img.src;
//myImg.src;
//  classes
class Coder {
    constructor(name, music, age, lang = "Typescript" // default
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, i am ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i write ${this.lang}`;
    }
}
const Sara = new WebDev("mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class GuitaristNew {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new GuitaristNew("Jimmy", "guitar");
console.log(Page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Pete = new Peeps("Pete");
console.log(Steve.id);
console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el == "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZTop"];
console.log(MyBands.data);
/* interface TransactionObj {
  readonly [index: string]: number;
}
 */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions["Dave"]); // typscript will return becaues key/index is string .. return undefined
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
//console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // assertion
}
Object.keys(student).map((key) => {
    console.log(student[key]); // we dont no the type and retive the type by referencing student
});
const logStudentKey = (student, key) => {
    // defined key
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]); // kjey of as to be declared
}
/////////////////////////////////
// Generics type
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg }; // double bang operator 0 or 1 flipping true fasle
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg }; // double bang operator 0 or 1 flipping true fasle
};
const processUser = (user) => {
    // process the user with logic
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
//complex ,T user object K is keys of user objects
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653",
            },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
        },
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
// generics in a class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12 alreday has string ionitiated as we asigned ""john
const myState = new StateObject([15]); // here we specified exactly what types we can pass
myState.state = ["Dave", 42, true];
console.log(myState.state);
const updateAssignment = (assign, propsToUpdate // partial allows for an object to pass with only oney key we want to change
) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    //send to database etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verfied: true }); // read only props
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verfied: true }));
// Record
const hexColorMap = {
    // keys will be strings and values will be strings
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// ReturnType
//type newAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
