# HTML README

1. Relatively simple, but I added my boiler plate to which i attached a script tag and style sheet link, then created a div to which I attached a class of container.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>JS Review</title>
</head>
<body>
    <h1>JS Review</h1>
    <div class="container">
        "this is a div"
    </div>
    <span>This is a span</span>
    <script src="app.js"></script>
    <script src="problems.js"></script>
</body>
</html>
```
2. I then added a span, didnt give it a class, and styled it a bit more in the CSS.
```html
<span>This is a span</span>
```
3. I then added a host of reset buttons to the button to which I attached no CSS, I used
```html
button:reset*5
```
This gave me five reset buttons, which looked like this in my HTML.
```html
    <button type="reset"></button>
    <button type="reset"></button>
    <button type="reset"></button>
    <button type="reset"></button>
    <button type="reset"></button>
```

