# captionRefTo

Available values of the "equation"/"figure"/"table" reference type:\n-**"entireCaption"**- the entire caption text;\n-**"labelNumber"** - the label and object number only, e.g. "Table 1.1";\n-**"captionText"** - the caption text only;\n-**"pageNum"** - the page number containing the referenced object;\n-**"aboveBelow"** - the words "above" or "below" depending on the item position.

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

```javascript editor-xlsx
paragraph.AddCaptionCrossRef("table", "pageNum", caption);
```
