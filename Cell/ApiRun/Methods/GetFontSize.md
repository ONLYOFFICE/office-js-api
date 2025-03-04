# GetFontSize

Gets the font size from the current text properties.

## Syntax

```javascript
expression.GetFontSize();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[hps](../../Enumeration/hps.md)

## Example

This example gets a text font size.

```javascript editor-xlsx
// How to find out a text font size.

// Get a text font size and display it in the worksheet.

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
oTextPr.SetFontSize(30);
oParagraph = Api.CreateParagraph();
var nFontSize = oTextPr.GetFontSize();
oParagraph.AddText("Font size: " + nFontSize);
oDocContent.Push(oParagraph);
```
