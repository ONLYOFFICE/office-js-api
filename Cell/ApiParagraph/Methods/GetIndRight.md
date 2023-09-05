# GetIndRight

Returns the paragraph right side indentation.<br>Inherited From: [ApiParaPr#GetIndRight](../../ApiParaPr/Methods/GetIndRight.md)

## Syntax

expression.GetIndRight();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md) &#124; undefined

## Example

This example shows how to get the paragraph right side indentation.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.SetJc("right");
oParagraph.SetIndRight(2880);
var nIndRight = oParagraph.GetIndRight();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Right indent: " + nIndRight);
oDocContent.Push(oParagraph);
builder.SaveFile("xlsx", "GetIndRight.xlsx");
builder.CloseFile();
```