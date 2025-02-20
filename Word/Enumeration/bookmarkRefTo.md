# bookmarkRefTo

Available values of the "bookmark" reference type:
**"text"** - the entire bookmark text;
**"pageNum"** - the bookmark page number;
**"paraNum"** - the bookmark paragraph number;
**"noCtxParaNum"** - the abbreviated paragraph number (the specific item only, e.g. instead of "4.1.1" you refer to "1" only);
**"fullCtxParaNum** - the full paragraph number, e.g. "4.1.1";
**"aboveBelow"** - the words "above" or "below" depending on the item position.

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
