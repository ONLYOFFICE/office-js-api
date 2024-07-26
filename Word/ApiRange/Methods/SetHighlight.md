# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current Range.

## Syntax

expression.SetHighlight(sColor);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | highlightColor |  | Available highlight color. |

## Returns

ApiRange, null

## Example

This example specifies a highlighting color which is applied as a background to the contents of the Range.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 26);
oRange.SetHighlight("lightGray");
```
