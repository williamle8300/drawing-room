
# drawing-room

author npm modules fast

# Are you sure?

1. State the problem.
2. Has it already been solved?
3. No? Proceed.

# The #1 rule for writing UNIX modules

Trivial.

# Tenets

common          well-abstracted
philosophy      has opinions
literary        eloquent

# Get a drawing room

```shell
cd ~/Desktop && npm install drawing-room && mv node_modules/drawing-room ~/Desktop && mv node_modules ~/.Trash && cd drawing-room && npm install && mate .
```

1. What is it? read, play, draw, write
2. Abstract
3. Determine what preexisting + non-existent modules are needed
4. Draw ––>nonJS ––>pseudoJS
5. Engineer. remember to `me⇥` often
6. `tape`, README, git, npm

# substack's approach  ([link](https://gist.github.com/khoomeister/5010943))

> Now SUBSTACK doesn't do that. He just wants the most dependable, easy to understand and smallest module he can find (or make) to fulfil his objective.
> In other words, he subscribes to the UNIX philosophy.

> [...]

> To him, it's about taking the time to understand the abstractions.

## workflow

- SUBSTACK codes as usual:
  - Uses console.dir alot to inspect & debug
  - DIDN'T TDD - CREATES AN EXAMPLE.JS THAT REQUIRES THE MODULE AND TESTS ITS FUNCTIONALITY
  - Codes in vim & switches to a terminal every so often to run the example.js script
- IF HE NOTICES AN OPPORTUNITY TO MODULARISE, HE IMMEDIATELY MOVES THE FUNCTION INTO A NEW FILE & CHANGES THE FUNCTION DECLARATION TO MODULE.EXPORTS = ... (WHEN I SAY IMMEDIATELY, I REALLY DO MEAN IMMEDIATELY).
- When he's happy with the module, `npm install tape tap  --save-dev` *(own note: added `--save-dev`)*
- Refactors the example.js file as a set of tests (see below).
- Writes README.markdown from scratch with introduction, API documentation & license (API documentation is quick & easy to write when you have small modules).
- Runs pkginit to create package.json. *(own note: i run pkginit as the first step)*
- Create GitHub repo and npm publish