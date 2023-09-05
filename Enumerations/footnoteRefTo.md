# footnoteRefTo

Footnote reference type.

## Type

String

## Properties

- "footnoteNum" - the footnote number;
- "pageNum" - the page number of the footnote;
- "aboveBelow" - the words "above" or "below" depending on the position of the item;
- "formFootnoteNum" - the form number formatted as a footnote. The numbering of the actual footnotes is not affected.

## Example

This example adds a cross-reference to the page containing a footnote.

```javascript
oParagraph.AddFootnoteCrossRef("pageNum", oFootnoteParagraph);
```