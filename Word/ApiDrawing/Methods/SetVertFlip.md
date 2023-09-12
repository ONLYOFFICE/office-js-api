# SetVertFlip

Flips the current drawing vertically.

## Syntax

expression.SetVertFlip(bFlip);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bFlip | Required | Boolean | Specifies if the figure will be flipped vertically or not. |

## Returns

Boolean (returns false if param is invalid)

## Example

This example flips the drawing vertically.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDrawing.SetVertFlip(true);
builder.SaveFile("docx", "SetVertFlip.docx");
builder.CloseFile();
```