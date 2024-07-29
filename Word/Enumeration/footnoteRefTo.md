# footnoteRefTo

Available values of the "footnote" reference type:

## Type

Enumeration

## Values

- "footnoteNum"
- "pageNum"
- "aboveBelow"
- "formFootnoteNum"


## Example

This example adds a cross-reference to the page containing a footnote.

```javascript
oParagraph.AddFootnoteCrossRef("pageNum", oFootnoteParagraph);
```