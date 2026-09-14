# Assignment: Student Marks Project

## Goal

Create a simple student marks project using HTML, CSS, and JavaScript.

Students will practice:

- Using variables
- Using an array
- Using functions
- Using `if`, `else if`, and `else`
- Using a `for` loop
- Updating HTML with `innerHTML`
- Handling button clicks

## Project Features

Your student marks project should have:

1. An input field for entering a student mark
2. An Add Mark button
3. A Clear button
4. A list of all student marks
5. Total marks
6. Average marks
7. Number of passed students
8. Number of failed students
9. A success or error message

## Rules

- The mark cannot be empty.
- The mark must be between `0` and `100`.
- A student passes if the mark is `33` or higher.
- A student fails if the mark is less than `33`.
- Use an array to store all marks.
- Use a loop to check all marks.
- Do not use objects.

## Files

Use these files:

```text
index.html
style.css
script.js
```

## How To Use HTML Tags With innerHTML

`innerHTML` is used when you want to add HTML code inside an element using JavaScript.

Example:

```js
let result = document.getElementById("result");

result.innerHTML = "<h2>Hello Student</h2>";
```

This will add an `h2` tag inside the element:

```html
<h2>Hello Student</h2>
```

You can also use `innerHTML` to add list items:

```js
let markList = document.getElementById("markList");

markList.innerHTML = "<li>Student 1: 80 - Pass</li>";
```

To add many list items, use a variable and a loop:

```js
let marks = [80, 25, 60];
let listText = "";

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 33) {
    listText = listText + "<li>Student " + (i + 1) + ": " + marks[i] + " - Pass</li>";
  } else {
    listText = listText + "<li>Student " + (i + 1) + ": " + marks[i] + " - Fail</li>";
  }
}

markList.innerHTML = listText;
```

## innerHTML Notes

- Use `innerHTML` when you need to add HTML tags like `<li>`, `<h2>`, `<p>`, or `<span>`.
- Use `textContent` when you only need to add plain text.
- Do not put unknown user text directly inside `innerHTML` in real projects.

## Student Tasks

1. Open `index.html` in a browser.
2. Enter a mark between `0` and `100`.
3. Click Add Mark.
4. Add more marks.
5. Check the total, average, pass count, and fail count.
6. Try an empty mark.
7. Try a mark below `0` or above `100`.
8. Click Clear and check if all values reset.
