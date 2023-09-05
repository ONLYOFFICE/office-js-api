# GetClassType

Returns a type of the ApiRange class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and inserts it into the table.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is just a sample text in the cell A1.");
var sClassType = oRange.GetClassType();
oWorksheet.GetRange('A3').SetValue("Class type: " + sClassType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();
```