# GetAllImages

Returns all images from the current sheet.

## Syntax

expression.GetAllImages();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiImage](../../ApiImage/ApiImage.md)>


## Example

This example shows how to get all images from the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
var aImages = oWorksheet.GetAllImages();
var sClassType = aImages[0].GetClassType();
oWorksheet.GetRange("A10").SetValue("Class Type = " + sClassType);
builder.SaveFile("xlsx", "GetAllImages.xlsx");
builder.CloseFile();
```