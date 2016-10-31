# Glob Tester CLI [![npm version](https://badge.fury.io/js/glob-tester-cli.svg)](https://badge.fury.io/js/glob-tester-cli)

Just a simple CLI tool to test [glob](https://www.npmjs.com/package/glob) patterns.

## Installation

It's meant to be a CLI tool to test glob patterns, so install it globally via npm.

```sh
$ npm install -g glob-tester-cli
```

## Usage

Pass in the pattern as a string in quotes:

```sh
$ glob '*.js'
> Pattern:  *.js
> Options:  { }
> index.js
```

### Root Option

Optionally, you can define the root option (where `/` points to).

```sh
$ glob '*.js' --root ~/Projects
> Pattern:  *.js
> Options:  { root: /Users/garthdb/Projects }
> index.js
```

If no directory is included with `--root` the CLI assumes `process.cwd()`:

```sh
$ cd ~/
$ glob '*.js' --root
> Pattern:  *.js
> Options:  { root: /Users/garthdb/ }
> index.js
```
