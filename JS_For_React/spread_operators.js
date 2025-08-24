// 🧠 Syntax Recap:

// ...variable
// It can be used in:

// Arrays

// Objects

// Function arguments



// 🟢 1. Array Cloning

const nums = [1, 2, 3];
const copy = [...nums];   //  Makes a shallow copy of the array nums.

// 🔁 2. Array Merging / Concatenation

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b]; // [1, 2, 3, 4]  

// ✅ Merges arrays into one.

// 🧪 3. Rest in Destructuring

const [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]
// ✅ Useful for ignoring the first few elements and getting the rest.


//🧰 4. Object Cloning

const obj = { name: "Dipu", age: 20 };
const copy2 = { ...obj };

//✅ Makes a shallow copy of obj.


//🪄 5. Merging Objects

const user = { name: "Alex" };
const extra = { age: 19 };
const full = { ...user, ...extra }; // { name: "Alex", age: 19 }
//✅ Later properties overwrite earlier ones if there’s a conflict.

//⚛️ 6. Passing Props in React Components

// const props = {
//   type: "button",
//   onClick: () => alert("clicked"),
//   disabled: false,
// };

// <Button {...props}>Click Me</Button>

//✅ Super useful for dynamic or reusable props.

// ✅ That’s what we used in your custom <Button> component.




// 🧩 7. Default + Override Props in Components

const defaultProps = {
  variant: "primary",
  disabled: false,
};

const buttonProps = {
  ...defaultProps,
  disabled: true, // overrides
};
//✅ Allows setting defaults and selectively overriding them.

// ⚙️ 8. Dynamic Object Construction

const key = "id";
const value = 123;

const obj2 = {
  name: "Dipu",
  [key]: value,  // dynamic key
  ...{ gender: "female" }, // spreads the object into this one.
};

console.log(`the object 2 will be ${obj2}`)

//Why Use This?
// You don’t always know the property names beforehand (useful in forms, filtering, query builders).

// You want to programmatically inject extra fields.

// Real Example in React:

// const [formState, setFormState] = useState({});

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;

//   setFormState(prev => ({
//     ...prev,
//     [name]: value,
//   }));
// };
//When <input name="username" value="Dipu" /> changes, it updates: formState = { username: "Dipu" }




//✅ Build flexible objects dynamically using spread.

//🏁 9. Immutability in State Updates (React)

// const [formData, setFormData] = useState({ name: "", email: "" });

// const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setFormData({ ...formData, name: e.target.value });
// };
// //✅ Keeps the original state intact and updates only the desired property.

// ⚠️ Without spread, it would overwrite the whole object.


//🛡️ 10. Conditionally Adding Props or Keys
//Sometimes you want to conditionally include a key-value pair inside an object only if some condition is true.


const isAdmin = true;

const user2 = {
  name: "Deepak",
  ...(isAdmin && { role: "admin" }),
};
//If isAdmin === true, the object { role: "admin" } is spread.

// Real React Example:
// <Button
//   {...(isLoading && { disabled: true })}
//   onClick={handleSubmit}
// >
//   {isLoading ? "Loading..." : "Submit"}
// </Button>
// If isLoading === true, it passes disabled={true} to the button.