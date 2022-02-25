# Problem context

I'm trying to replace `ts-loader` with `swc-loader` in my app to speed up building.And I found that the replacement cause unexpected result in code execution order. Here's the reproduction: 

1. run `pnpm install` on branch `main`.
2. run `git checkout ts-loader`
3. run `npm run reproduce`
2. run `git checkout swc-loader`
3. run `npm run reproduce`

And you can see the output of the first `npm run reproduce` is:
```
a.js entry
d.js constructor
d.js init
a.js before B
B.js exec
```
and the second one:
```
d.js constructor
a.js entry
d.js init
a.js before B
B.js exec
```

It would be grateful to know what cause the difference. Thank you!