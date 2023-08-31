# ToJSON

Converts the ApiSchemeColor object into the JSON object.

## Syntax

expression.ToJSON();

`expression` - A variable that represents a [ApiSchemeColor](../ApiSchemeColor.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiSchemeColor object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSchemeColor = Api.CreateSchemeColor("dk1");
var json = oSchemeColor.ToJSON();
var oSchemeColorFromJSON = Api.FromJSON(json);
var oFill = Api.CreateSolidFill(oSchemeColorFromJSON);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```