# endnoteRefTo

Endnote reference type.

## Type

String

## Properties

- "endnoteNum" - the endnote number;
- "pageNum" - the endnote page number;
- "aboveBelow" - the words "above" or "below" depending on the item position;
- "formEndnoteNum" - the form number formatted as an endnote. The numbering of the actual endnotes is not affected.

## Example

This example adds a cross-reference to the page containing an endnote.

```javascript
oParagraph.AddEndnoteCrossRef("pageNum", oEndnoteParagraph);
```