# endnoteRefTo

Available values of the "endnote" reference type:

## Type

Enumeration

## Values

- "endnoteNum"
- "pageNum"
- "aboveBelow"
- "formEndnoteNum"


## Example

This example adds a cross-reference to the page containing an endnote.

```javascript
oParagraph.AddEndnoteCrossRef("pageNum", oEndnoteParagraph);
```