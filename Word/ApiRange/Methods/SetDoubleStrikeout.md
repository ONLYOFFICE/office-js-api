# SetDoubleStrikeout

Specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.

## Syntax

expression.SetDoubleStrikeout(isDoubleStrikeout);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | Required | boolean |  | Specifies if the contents of the current Range are displayed double struck through or not. |

## Returns

ApiRange, null

## Example

This example specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Server Builder");
var oRange = oDocument.GetRange(18, 23);
oRange.SetDoubleStrikeout(true);
```
