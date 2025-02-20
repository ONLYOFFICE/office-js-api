# TocLeader

Possible values for the table of contents leader:
**"dot"** - "......."
**"dash"** - "-------"
**"underline"** - "_______"

## Type

Enumeration

## Values

- "dot"
- "dash"
- "underline"
- "none"


## Example

This example adds a table of contents with the dot leader to the document.

```javascript editor-pptx
let tocLeader = "dot";
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": tocLeader, "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr);
```
