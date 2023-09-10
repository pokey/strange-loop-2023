1. Voice coding demo (1–2 min)
- see eg https://youtube.com/clip/Ugkxr-hEQpT7WKFmvs1IhO1O0wks0q0SYaY-
- or https://youtube.com/clip/UgkxsdKtrITCUV8laxhB5-HcRRLr0QXJFuf1

2. Voice as a medium (5–10 min)
- pre-existing voice coding tools mimic a keyboard
- Cursorless code manipulation engine was built to be driven by voice
- let's understand the characteristics of voice as a medium; how should that influence our design? (below bullets are of the form characteristic => implication)
a) Human language is compositional => lean into composable abstractions (ie vim on steroids)
b) Higher latency than a keyboard => design for chaining long commands
c) Coder already knows rich / complex vocabulary in their native human language => leverage the words / concepts they already know
- why not just use English? imprecise and inefficient

3. Cursorless core abstractions (10–15 min)
a) Cursorless command is pipeline where 'targets' flow from 'mark' => 'modifiers' => 'action'
- connection to the jq programming language
b) Marks emit zero or more targets, eg from cursor position, from decorated marks on screen, etc
c. Modifiers modify outputs of marks / previous modifiers, eg expand to containing function, next line, every function in containing class, etc
- Different ways to see a document: as a sequence of tokens, a hierarchical collection of functions, nested parentheses, etc. Scopes are an abstraction to unify these viewpoints, enabling a consistent yet powerful way to construct modifiers
- "smart" vs "dumb" modifiers: they're both important
a. Actions: As every sentence needs a verb, so every Cursorless command needs an action. Delete, fold, swap, move, copy, select, scroll, sort, change delimiters, rename, etc
- Learn how different targets can interact with different actions in interesting ways (eg removal vs content range)

4. Cursorless and tree-sitter (5–10 min)
a. Quick synopsis of tree-sitter parsers
b. How we use tree-sitter queries to define scopes
c. Advanced Cursorless tree-sitter query captures: domains, iteration scopes, removal ranges, delimiters, etc

5. Comparisons and future directions (5 min)
a. Future work: multi-file manipulations, bookmarking targets, etc
b. Comparison and integration with Copilot / GPT