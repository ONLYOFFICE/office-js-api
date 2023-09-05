# ToJSON

Converts the ApiDrawing object into the JSON object.

## Syntax

expression.ToJSON(bWriteNumberings, bWriteStyles);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | Boolean | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | Boolean | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiDrawing object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
var json = oDrawing.ToJSON(false, true);
var oDrawingFromJSON = Api.FromJSON(json);
oParagraph.AddDrawing(oDrawingFromJSON);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```