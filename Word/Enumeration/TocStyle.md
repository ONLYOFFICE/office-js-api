# TocStyle

Possible values for the table of contents style.

## Type

Enumeration

## Values

- "simple"
- "online"
- "standard"
- "modern"
- "classic"


## Example

This example adds a table of contents of the standard style to the document.

```javascript
let tocStyle = "standard";
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": tocStyle};
doc.AddTableOfContents(tocPr);
```
