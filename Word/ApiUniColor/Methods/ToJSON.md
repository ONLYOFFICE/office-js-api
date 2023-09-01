# ToJSON

Converts the ApiUniColor object into the JSON object.

## Syntax

expression.ToJSON();

`expression` - A variable that represents a [ApiUniColor](../ApiUniColor.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiUniColor object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oPresetColor = Api.CreatePresetColor("peachPuff");
var json = oPresetColor.ToJSON();
var oPresetColorFromJSON = Api.FromJSON(json);
var oGs1 = Api.CreateGradientStop(oPresetColorFromJSON, 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```