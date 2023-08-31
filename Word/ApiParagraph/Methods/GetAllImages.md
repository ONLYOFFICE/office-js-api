# GetAllImages

Returns a collection of image objects in the paragraph.

## Syntax

expression.GetAllImages();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiImage](../../ApiImage/ApiImage.md)>

## Example

This example shows how to get a collection of image objects in the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oImage1 = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oImage1);
var oImage2 = Api.CreateImage("https://api.onlyoffice.com/content/img/editor/sharing_settings.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oImage2);
var aImages = oParagraph.GetAllImages();
var sClassType = aImages[0].GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph); 
builder.SaveFile("docx", "GetAllImages.docx");
builder.CloseFile();
```