# SetFill

Sets the text color to the current text run.

## Syntax

expression.SetFill(oApiFill);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text color to the current text run.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFill(oFill);
oParagraph.AddText("This is a text run with the font color set to orange.");
oParagraph.SetTextPr(oTextPr);
```
