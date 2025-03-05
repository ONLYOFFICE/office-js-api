# GetRefersTo

Returns a formula that the name is defined to refer to.

## Syntax

```javascript
expression.GetRefersTo();
```

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a formula that the name is defined to refer to.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("=SUM(A1:B1)");
Api.AddDefName("summa", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("summa");
defName.SetRefersTo("=SUM(A1:B1)");
worksheet.GetRange("A3").SetValue("The name 'summa' refers to the formula from the cell C1.");
worksheet.GetRange("A4").SetValue("Formula: " + defName.GetRefersTo());
```
