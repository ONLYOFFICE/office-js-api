# GetNextImage

Returns the next inline image if exists.

## Syntax

```javascript
expression.GetNextImage();
```

`expression` - A variable that represents a [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiImage](../../ApiImage/ApiImage.md) \| null

## Example

This example shows how to get the next inline image if exists.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image1 = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(image1);
let image2 = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000);
paragraph.AddLineBreak();
paragraph.AddDrawing(image2);
let nextImage = image1.GetNextImage();
let copyImage = nextImage.Copy();
paragraph.AddLineBreak();
paragraph.AddDrawing(copyImage);
```
