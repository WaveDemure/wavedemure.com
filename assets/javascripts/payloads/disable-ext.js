<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disable Chrome Extension</title>

    <!-- Include Prism CSS and JavaScript files -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css" integrity="sha512-G5aXhggMbTc3RuswPt3X+13rxF3JdAYgU5/2XJl/d6ZdU3+8b/qI4N2JK9O8O43IMUV8w6O+3LGd0+3Qa4xm/w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js" integrity="sha512-lDlXjNH7+GnHbXryjGzqL/gUf4zAwLGtUaIUuuW58Yb6oP+ePt8ftO+njCpJsEy+1in3aICwOHxMZG4q4mABrA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-javascript.min.js" integrity="sha512-dq8cikm7/a0N+rxc8q4U3e5/tu/Y6QTYIADU1BiGMLnOXYjjg4rmU4qUG7zpcG7Rp3eJDph5prZYP1azYtP8sg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>

    <h1>Disable Chrome Extension</h1>

    <p>Below is a JavaScript code snippet that uses the Chrome Extension API to disable a specific extension.</p>

    <pre><code class="language-javascript">
chrome.runtime.getBackgroundPage(function (backgroundPage) {
    backgroundPage.chrome.management.setEnabled("EXTENSION ID HERE", false);
});
    </code></pre>

    <p>Make sure to replace "EXTENSION ID HERE" with the actual ID of the extension you want to disable.</p>

</body>

</html>
