# captionRefTo

Caption reference type.

## Type

String

## Properties

- "entireCaption"- the entire caption text;
- "labelNumber" - the label and object number only, e.g. "Table 1.1";
- "captionText" - the caption text only;
- "pageNum" - the page number containing the referenced object;
- "aboveBelow" - the words "above" or "below" depending on the item position.

## Example

This example adds a cross-reference to the page containing a table caption.

```javascript
oParagraph.AddCaptionCrossRef("table", "pageNum", oCaptionParagraph);
```