# CaptionLabel

Possible values for the caption label.

## Type

String

## Properties

- "Table" 
- "Equation" 
- "Figure"

## Example

This example add a cross-reference to the page containing a table caption.

```javascript
oParagraph.AddCaptionCrossRef("Table", "pageNum", oCaptionParagraph);
```