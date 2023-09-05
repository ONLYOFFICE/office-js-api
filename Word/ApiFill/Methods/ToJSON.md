# ToJSON

Converts the ApiFill object into the JSON object.

## Syntax

expression.ToJSON();

`expression` - A variable that represents a [ApiFill](../ApiFill.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiFill object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var json = oFill.ToJSON();
var oFillFromJSON = Api.FromJSON(json);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 1908000, 1404000, oFillFromJSON, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```