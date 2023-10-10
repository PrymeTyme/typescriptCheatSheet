// basic types

let myName: string = "Buzz";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let union: string | number;

myName = "Fizz";
meaningOfLife = 42;
isLoading = true;
album = "Van Halen";
album = 1985;
union = 51;
union = "test";

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean; // 0,1 or true, false

let re: RegExp = /\w+/g;

//complex types.. Arrays ,Objects

let stringArr = ["one", "hey", "fizz"];
let guitars = ["Strat", "LesPaul", 5150];
let mixedData = ["EVH", 1985, true];

stringArr[0] = "john";
stringArr.push("hey");

guitars[0] = 1985;
guitars.unshift("jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// tuple

let myTuple: [string, number, boolean] = ["fizz", 42, true]; // types on fixed position and size/length of array

let mixed = ["john", 1, false];

// objects

let myObj: object;
myObj = []; // arr is also a type of object
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Fizz",
  prop2: true,
};

type Guitarist = {
  // can be interface aswell minus the =
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1985, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `hello ${guitarist.name}!`;
};

console.log(greetGuitarist(jp));

// enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type testGuitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types

let myNameTest: "Fizz";

let userName: "Fizz" | "Buzz" | "John";
userName = "John";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number; // alias
//interface mathFunction {
//(a: number, b: number): number;
//} // interface

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameter

const addAll = (a: number, b: number, c?: number): number => {
  // optional has be last parameter
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
const sumAll = (a: number, b: number, c: number = 2): number => {
  // default parameter

  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

// rest parameters  shuld also come at the end
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3, 4));

// never type

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

//custom type guard
const isNum = (value: any): boolean => {
  return typeof value == "number" ? true : false;
};

// use of teh never type
const numOrStr = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNum(value)) return "number";
  return createError("this hould never happen");
};

// aliases

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "Hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVAl: string = addOrConcat(2, 2, "concat") as string;
// carful TS sees no problem  but a string is returned
let nextVal: number = addOrConcat(2, 2, "add") as number;

10 as unknown as string; // two asssertionas double casting

// the DOM
const img = document.querySelector("img")!; // !non null assertion
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img"); // tsx file in react wont work with that assertion

//img.src;
//myImg.src;

//  classes
class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript" // default
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, i am ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `i write ${this.lang}`;
  }
}

const Sara = new WebDev("mac", "Sara", "Lofi", 25);

console.log(Sara.getLang());

// implementinterface to class

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class GuitaristNew implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new GuitaristNew("Jimmy", "guitar");
console.log(Page.play("strums"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Pete = new Peeps("Pete");

console.log(Steve.id);
console.log(Peeps.count);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el == "string")) {
      this.dataState = value;
      return;
    } else throw new Error("param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZTop"];
console.log(MyBands.data);

// index signature

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

/* interface TransactionObj {
  readonly [index: string]: number;
}
 */
const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 42,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

console.log(todaysTransactions["Dave"]); // typscript will return becaues key/index is string .. return undefined
/////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

//console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // assertion
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]); // we dont no the type and retive the type by referencing student
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  // defined key
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

///////////////////////////

/* interface Incomes{
  [key:string]:number
}  */

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>; // record untility type

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]); // kjey of as to be declared
}

/////////////////////////////////
// Generics type

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
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

// with interface

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg }; // double bang operator 0 or 1 flipping true fasle
};

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic
  return user;
};

console.log(processUser({ id: 1, name: "Dave" }));

//complex ,T user object K is keys of user objects

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
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

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");

console.log(store.state);
store.state = "Dave";
//store.state = 12 alreday has string ionitiated as we asigned ""john

const myState = new StateObject<(string | number | boolean)[]>([15]); // here we specified exactly what types we can pass
myState.state = ["Dave", 42, true];
console.log(myState.state);

////////////
// Utility Types

// Partial

interface Assignement {
  studentId: string;
  title: string;
  grade: number;
  verfied?: boolean;
}

const updateAssignment = (
  assign: Assignement,
  propsToUpdate: Partial<Assignement> // partial allows for an object to pass with only oney key we want to change
): Assignement => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignement = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignement = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignement>): Assignement => {
  //send to database etc.
  return assign;
};

const assignVerified: Readonly<Assignement> = {
  ...assignGraded,
  verfied: true,
}; // read only props

recordAssignment({ ...assignGraded, verfied: true });

// Record

const hexColorMap: Record<string, string> = {
  // keys will be strings and values will be strings
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit

type AssignResult = Pick<Assignement, "studentId" | "grade">; // pick assigned keys

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignement, "grade" | "verfied">; // omit does the opposite of pick.. ie exclude

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// exclude and Extract  not working with interfaces but string literals

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>; // exludes null and undefined

// ReturnType

//type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;

const tsAssign: newAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

// Awaited - helps us with the returntype of a promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
