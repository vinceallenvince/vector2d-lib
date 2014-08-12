![Build status](https://travis-ci.org/vinceallenvince/vector2d-lib.svg?branch=master)

# vector2d-lib

A 2d JavaScript Vector library.

##Install

To include vector2d-lib as a component in your project, use the node module.

```
npm install vector2d-lib --save
```

You can also use the [standalone version](https://github.com/vinceallenvince/vector2d-lib/releases/latest) and reference the js file from your document.

```
<html>
  <head>
    <script src="scripts/vector2d-lib.js" type="text/javascript" charset="utf-8"></script>
  </head>
  ...
```

##Usage

The module exports a Vector class. In a nodejs project, you access it via:

```
var Vector = require('vector2d-lib');
var vecA = new Vector(10, 10);
```

In the browser, the Vector class is a global.

```
<html>
  <head>
    <script src="scripts/vector2d-lib.js" type="text/javascript" charset="utf-8"></script>
  </head>
  <body>
    <script>
      var vecA = new Vector(10, 10);
    </script>
  </body>
</html>
```

To learn how to use the various Vector functions, please review [the docs](http://vinceallenvince.github.io/vector2d-lib/doc/).

##Building this project

This project uses [Grunt](http://gruntjs.com). To build the project first install the node modules.

```
npm install
```

Next, run grunt.

```
grunt
```

To run the tests, run 'npm test'.

```
npm test
```

To check test coverage run 'grunt coverage'.

```
grunt coverage
```

A pre-commit hook is defined in /pre-commit that runs jshint. To use the hook, run the following:

```
ln -s ../../pre-commit .git/hooks/pre-commit
```

A post-commit hook is defined in /post-commit that runs the Plato complexity analysis tools. To use the hook, run the following:

```
ln -s ../../post-commit .git/hooks/post-commit
```

View the [code complexity](http://vinceallenvince.github.io/vector2d-lib/reports/) report.
