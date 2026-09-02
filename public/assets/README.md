# Why main.css is still here

`main.css` is the old Jekyll (minima-derived) stylesheet. Nothing in this site
uses it.

It stays because the **blog repo** (`ghanithan/blog`, served at `/blog/`) links
it by absolute path:

```html
<link rel="stylesheet" href="/assets/main.css">
```

That path resolves against this repo, not the blog's own. The blog ships no CSS
of its own, so deleting this file leaves `/blog/` completely unstyled.

**Delete this directory once** the blog repo carries its own stylesheet at
`/blog/assets/main.css` and its layouts point there.
