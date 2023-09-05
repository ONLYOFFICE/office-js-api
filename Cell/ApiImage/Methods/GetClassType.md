# GetClassType

Returns a type of the ApiImage class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiImage](../ApiImage.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and inserts it into the document.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oImage = oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 2, 3 * 36000);
var sClassType = oImage.GetClassType();
oWorksheet.SetColumnWidth(0, 15);
oWorksheet.SetColumnWidth(1, 10);
oWorksheet.GetRange("A1").SetValue("Class Type = ");
oWorksheet.GetRange("B1").SetValue(sClassType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();
```