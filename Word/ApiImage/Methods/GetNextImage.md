# GetNextImage

Returns the next inline image if exists.

## Syntax

expression.GetNextImage();

`expression` - A variable that represents a [ApiImage](../ApiImage.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiImage](../../ApiImage/ApiImage.md) &#124; null (returns null if image is last)

## Example

This example shows how to get the next inline image if exists.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oImage1 = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oImage1);
var oImage2 = Api.CreateImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);
oParagraph.AddLineBreak();
oParagraph.AddDrawing(oImage2);
var oNextImage = oImage1.GetNextImage();
var oCopyImage = oNextImage.Copy();
oParagraph.AddLineBreak();
oParagraph.AddDrawing(oCopyImage);
builder.SaveFile("docx", "GetNextImage.docx");
builder.CloseFile();
```