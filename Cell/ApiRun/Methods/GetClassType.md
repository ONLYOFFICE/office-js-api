# GetClassType

Returns a type of the ApiTextPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"textPr"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-xlsx
// How to get a class type of ApiTextPr.

// Get a class type of ApiTextPr and display it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oParagraph.SetJc("left");
var sClassType = oTextPr.GetClassType();
oRun.AddText("Class Type = " + sClassType);
oParagraph.AddElement(oRun);
```
