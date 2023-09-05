# GetClassType

Returns a type of the ApiRun class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and inserts it into the document.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var sClassType = oRun.GetClassType();
oRun.SetFontSize(30);
oRun.AddText("Class Type = " + sClassType);
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();
```