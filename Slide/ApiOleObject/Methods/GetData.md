# GetData

Returns the string data from the current OLE object.

## Syntax

expression.GetData();

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the string data from the current OLE object.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oOleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
oOleObject.SetSize(200 * 36000, 130 * 36000);
oOleObject.SetPosition(70 * 36000, 30 * 36000);
oSlide.AddObject(oOleObject);
var sData = oOleObject.GetData();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 300 * 36000, 15 * 36000, oFill, oStroke);
oDrawing.SetPosition(20 * 36000, 170 * 36000);
var oDocContent = oDrawing.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("The OLE object data: " + sData);
oSlide.AddObject(oDrawing);
builder.SaveFile("pptx", "GetData.pptx");
builder.CloseFile();
```