# GetDefName

Returns the ApiName object of the current range.

## Syntax

```javascript
expression.GetDefName();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiName](../../ApiName/ApiName.md)

## Example

This example shows how to get the ApiName object of the range.

```javascript editor-xlsx
// How to find out a range name.

// Get a range, get its name and show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oRange = oWorksheet.GetRange("A1:B1");
var oDefName = oRange.GetDefName();
oWorksheet.GetRange("A3").SetValue("DefName: " + oDefName.GetName());
```
