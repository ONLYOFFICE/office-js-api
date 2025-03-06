# bookmarkRefTo

Available values of the "bookmark" reference type:\n-**"text"** - the entire bookmark text;\n-**"pageNum"** - the bookmark page number;\n-**"paraNum"** - the bookmark paragraph number;\n-**"noCtxParaNum"** - the abbreviated paragraph number (the specific item only, e.g. instead of "4.1.1" you refer to "1" only);\n-**"fullCtxParaNum** - the full paragraph number, e.g. "4.1.1";\n-**"aboveBelow"** - the words "above" or "below" depending on the item position.

## Type

Enumeration

## Values

- "text"
- "pageNum"
- "paraNum"
- "noCtxParaNum"
- "fullCtxParaNum"
- "aboveBelow"


## Example

This example adds a cross-reference to the page containing a bookmark.

```javascript editor-docx
paragraph.AddBookmarkCrossRef("pageNum", bookmark);
```
