# GetRefersTo

Returns a formula that the name is defined to refer to.

## Syntax

expression.GetRefersTo();

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get a formula that the name is defined to refer to.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("=SUM(A1:B1)");
Api.AddDefName("summa", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("summa");
oDefName.SetRefersTo("=SUM(A1:B1)");
oWorksheet.GetRange("A3").SetValue("The name 'summa' refers to the formula from the cell C1.");
oWorksheet.GetRange("A4").SetValue("Formula: " + oDefName.GetRefersTo());
builder.SaveFile("xlsx", "GetRefersTo.xlsx");
builder.CloseFile();
```