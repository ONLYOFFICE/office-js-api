# SetTextPr

Sets the text properties to the current Range.

## Syntax

expression.SetTextPr(oTextPr);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be applied to the current range. |

## Returns

ApiRange, null

## Example

This example sets the text properties to the Range.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oTextPr = oParagraph.GetTextPr();
oTextPr.SetItalic(true);
var oRange = oDocument.GetRange(0, 24);
oRange.SetTextPr(oTextPr);
```
