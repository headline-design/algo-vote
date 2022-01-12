# Algo Vote
Work in progress project enable smart-contract powered voting on the Algorand blockchain

build command (to dist folder, will create if does not exist):

```bash
npm run build
```

to correctly show css after bulding, modify the index.html that is generated in the dist folder by:

- removing one of the `<link>` tags for the css
- removing the numeric hash from the remaining `<link>`tag so that the href reads "styles.css"
- renaming the js file to "index.js"
- renaming the `<script>` tag src to "index.js"

Finally, copy your styles.css file into the dist folder.

test build command on localhost:

```serve dist
```
