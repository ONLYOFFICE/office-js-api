# TocLeader

Possible values for the table of contents leader:* **"dot"** - "......."* **"dash"** - "-------"* **"underline"** - "_______"

## Type

Enumeration

## Values

- "dot"
- "dash"
- "underline"
- "none"


## Example

This example adds a table of contents with the dot leader to the document.

```javascript
var sTocLeader = "dot";
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": sTocLeader, "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
```
