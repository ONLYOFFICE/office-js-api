# GetClassType

Returns a type of the ApiColor class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and inserts it into the table.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
var sColorClassType = oColor.GetClassType();
oWorksheet.GetRange("A4").SetValue("Class type = " + sColorClassType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();
```