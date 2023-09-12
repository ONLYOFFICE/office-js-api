# GetNextDrawing

Returns the next inline drawing object if exists.

## Syntax

expression.GetNextDrawing();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiDrawing](../ApiDrawing.md) &#124; null (returns null if drawing object is last)

## Example

This example shows how to get the next inline drawing object if exists.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oCopyDrawing = oDrawing.Copy();
oParagraph.AddDrawing(oCopyDrawing);
var oNextDrawing = oDrawing.GetNextDrawing();
oNextDrawing.SetHorFlip(true);
builder.SaveFile("docx", "GetNextDrawing.docx");
builder.CloseFile();
```