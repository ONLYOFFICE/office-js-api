# GetLockValue

Returns the lock value for the specified lock type of the current drawing.

## Syntax

expression.GetLockValue(sType);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [DrawingLockType](../../../Enumerations/DrawingLockType.md) | Lock type in the string format. |

## Returns

Boolean

## Example

This example shows how to get the lock value for the specified lock type of the drawing.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
oDrawing.SetLockValue("noSelect", true);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetContent();
var bLockValue = oDrawing.GetLockValue("noSelect");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This drawing cannot be selected: " + bLockValue);
oDocContent.AddElement(0, oParagraph);
builder.SaveFile("docx", "GetLockValue.docx");
builder.CloseFile();
```