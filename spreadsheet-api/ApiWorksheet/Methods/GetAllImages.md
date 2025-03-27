# GetAllImages

Returns all images from the current sheet.

## Syntax

```javascript
expression.GetAllImages();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiImage](../../ApiImage/ApiImage.md)[]

## Example

This example shows how to get all images from the sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
let images = worksheet.GetAllImages();
let classType = images[0].GetClassType();
worksheet.GetRange("A10").SetValue("Class Type = " + classType);
```
