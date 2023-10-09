<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>
At first ,when greeting declared there was no value. So it was undefined , but when the second line assigned greeting and gave the value an empty object.Now after console.log result should be an empty object
</i>
 
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:C

<i>The two arguments given by sum , here 1 is a number and "2" is a string.So, it is actually invalid. In this case, JavaScript will convert the number 1 to a string and then concatenate it with the string "2". for this javascript behavior , the result should be 12.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:A

<i>food is an array. there are 4 fruits here. and there is an object called info which has a property that's value is the first length(first fruit) of the array.but the food array won't change . Because , array and object have different structures. So, there will be no affect on that array for changing of the object value.  </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:B

<i>
There is a function called sayHi and there is a parameter name when function will be called with an argument the result will "Hi there,argument value" But when function will be called without argument must be show undefined.So, the result is"Hi, there undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:C

<i>There is a variable called count and value is 0 . and an array called nums which has 4 elements . And forEach  when applied on nums it will check if the value is truthy(not zero) then 1 should be added with num. So , from this position the condition will match with last three values except first value(0).For the addition will be applied 3 times with count. So ,the answer should be 3. </i>

</p>
</details>
