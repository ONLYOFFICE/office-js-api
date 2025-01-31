# GetTextFill

Gets the text fill from the current text properties.

## Syntax

```javascript
expression.GetTextFill();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oRun.AddLineBreak();
oParagraph.AddElement(oRun);
var oTextPr = oRun.GetTextPr();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
oRun.SetTextFill(oFill);
oParagraph = Api.CreateParagraph();
var oFill = oTextPr.GetTextFill();
var sType = oFill.GetClassType();
oParagraph.AddText("Text fill type: " + sType);
oDocContent.Push(oParagraph);
```
