# CreateRange

Creates an element range.If you do not specify the start and end positions, the range will be taken from the entire element.

## Syntax

expression.CreateRange(oElement, nStart, nEnd);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required |  |  | The element from which the range will be taken. |
| nStart | Required |  |  | Start range position. |
| nEnd | Required |  |  | End range position. |

## Returns

ApiRange, null

## Example

This example ctreates a range and sets bold for the first 9 characters.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = Api.CreateRange(oParagraph, 0, 9);
oRange.SetBold(true);
```
