# endnoteRefTo

Available values of the "endnote" reference type:\n-**"endnoteNum"** - the endnote number;\n-**"pageNum"** - the endnote page number;\n-**"aboveBelow"** - the words "above" or "below" depending on the item position;\n-**"formEndnoteNum"** - the form number formatted as an endnote. The numbering of the actual endnotes is not affected.

## Type

Enumeration

## Values

- "endnoteNum"
- "pageNum"
- "aboveBelow"
- "formEndnoteNum"


## Example

This example adds a cross-reference to the page containing an endnote.

```javascript editor-xlsx
paragraph.AddEndnoteCrossRef("pageNum", endnoteParagraph);
```
