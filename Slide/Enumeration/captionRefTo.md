# captionRefTo

Available values of the "equation"/"figure"/"table" reference type:

## Type

Enumeration

## Values

- "entireCaption"
- "labelNumber"
- "captionText"
- "pageNum"
- "aboveBelow"


## Example

This example adds a cross-reference to the page containing a table caption.

```javascript
oParagraph.AddCaptionCrossRef("table", "pageNum", oCaptionParagraph);
```