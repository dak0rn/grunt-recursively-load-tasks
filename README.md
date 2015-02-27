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
