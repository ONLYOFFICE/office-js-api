# GetFontNames

Returns all font names from all elements inside the current run.

## Syntax

```javascript
expression.GetFontNames();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

This example shows how to get all font names from all elements inside the run.

```javascript editor-xlsx
// How to get all font names from the ApiRun object elements.

// Get all font names from a text run as an array and display it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetFontFamily("Comic Sans MS");
oRun.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
var aFontNames = oRun.GetFontNames();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Run font names: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aFontNames.length; i++ ){
	oParagraph.AddText(aFontNames[i]);
	oParagraph.AddLineBreak();
}
oDocContent.Push(oParagraph);
```
