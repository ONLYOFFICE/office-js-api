# TofStyle

Possible values for the table of figures style.

## Type

type

## Properties

- "simple" 
- "online" 
- "classic" 
- "distinctive" 
- "centered" 
- "formal"

## Example

This example adds a table of figures of the distinctive style to the document.

```javascript
var sTofStyle = "distinctive";
var oTofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": sTofStyle};
oDocument.AddTableOfFigures(oTofPr);
```