# GetRowHeight

Returns the row height value.

## Syntax

expression.GetRowHeight();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[pt](../../Enumeration/pt.md)

## Example

This example shows how to get the row height value.

```javascript
var oWorksheet = Api.GetActiveSheet();
var nHeight = oWorksheet.GetRange("A1").GetRowHeight();
oWorksheet.GetRange("A1").SetValue("Height: ");
oWorksheet.GetRange("B1").SetValue(nHeight);
```
