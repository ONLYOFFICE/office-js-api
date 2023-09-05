# GetPageOrientation

Returns the page orientation.

## Syntax

expression.GetPageOrientation();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[PageOrientation](../../../Enumerations/PageOrientation.md)

## Example

This example shows how to get the page orientation.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);
builder.SaveFile("xlsx", "GetPageOrientation.xlsx");
builder.CloseFile();
```