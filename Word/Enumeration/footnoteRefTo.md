# footnoteRefTo

Available values of the "footnote" reference type:\n-**"footnoteNum"** - the footnote number;\n-**"pageNum"** - the page number of the footnote;\n-**"aboveBelow"** - the words "above" or "below" depending on the position of the item;\n-**"formFootnoteNum"** - the form number formatted as a footnote. The numbering of the actual footnotes is not affected.

## Type

Enumeration

## Values

- "footnoteNum"
- "pageNum"
- "aboveBelow"
- "formFootnoteNum"


## Example

This example adds a cross-reference to the page containing a footnote.

```javascript editor-docx
paragraph.AddFootnoteCrossRef("pageNum", footnoteParagraph);
```
