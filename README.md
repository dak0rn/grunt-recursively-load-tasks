# grunt-recursively-load-tasks
A simple "plugin" for grunt that allows you to load modules from parent directories as npm does.

## Introduction
Even though grunt uses npm to manage contribution packages they differ in an important
aspect: while `require()` in node recursively loads packages from `node_modules` folders
that might also be located in parent directories, the grunt task loader functions consider
local package installations only.

While this seems reasonable, there are a couple of project types that need to manage
build dependencies globally and do not work with the way grunt loads tasks.

This package addresses this problem by extending grunt by a function that tries to
load tasks recursively.

## Installation

The package can be installed with npm

```bash
npm install grunt-recursively-load-tasks
```


## Usage
Require the package in your `Gruntfile.js` and throw `grunt` in it.
This usually looks this way:

```js
module.exports = function(grunt) {
    require('grunt-recursively-load-tasks')(grunt);
};
```

After that, the function `grunt.recursivelyLoadTasks` is exposed which takes
three arguments:

```js
grunt.recursivelyLoadTasks(taskname, directory, depth)
```

- `taskname` is the name of the task to load (e.g. `grunt-hub`)
- `directory` is the directory to start searching for `node_modules` folders,
by default this is the current directory
- `depth` is a number indication the levels of parent folders to consider, by default
this is `10`

You then can load tasks that are located in a parent's `node_modules` folder this way:

```js
grunt.recursivelyLoadTasks('grunt-whatever');
grunt.recursivelyLoadTasks('grunt-whatever','/tmp/a/b/c');
grunt.recursivelyLoadTasks('grunt-whatever','/home/user/me/',2);
```
