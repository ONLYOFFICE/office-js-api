# CreateBlipFill

Creates a blip fill to apply to the object using the selected image as the object background.

## Syntax

expression.CreateBlipFill(sImageUrl, sBlipFillType);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | String | The path to the image used for the blip fill (currently only internet URL or Base64 encoded images are supported). |
| name | Required | [BlipFillType](../../../Enumerations/BlipFillType.md) | The type of the fill used for the blip fill. (tile or stretch). |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example shows hot to create a blip fill to apply to the object using the selected image as the object background.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateBlipFill("https://api.onlyoffice.com/content/img/docbuilder/examples/icon_DocumentEditors.png", "tile");
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("star10", 5930900, 595605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "CreateBlipFill.docx");
builder.CloseFile();
```