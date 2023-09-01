# GetClassType

Returns a type of the ApiBullet class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiBullet](../ApiBullet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get a type of the ApiBullet class and insert it into the table.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oBullet = Api.CreateNumbering("ArabicParenR", 1);
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
oParagraph = Api.CreateParagraph();
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
oDocContent.Push(oParagraph);
var sClassType = oBullet.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("Class Type = " + sClassType);
oDocContent.Push(oParagraph);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();
```