# bookmarkRefTo

Available values of the "bookmark" reference type:

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

```javascript
oParagraph.AddBookmarkCrossRef("pageNum", sBookmark);
```