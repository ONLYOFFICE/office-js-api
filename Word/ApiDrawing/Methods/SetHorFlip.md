# SetHorFlip

Flips the current drawing horizontally.

## Syntax

expression.SetHorFlip(bFlip);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bFlip | Required | Boolean | Specifies if the figure will be flipped horizontally or not. |

## Returns

This method doesn't return any data.

## Example

This example flips the drawing horizontally.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDrawing.SetHorFlip(true);
builder.SaveFile("docx", "SetHorFlip.docx");
builder.CloseFile();
```