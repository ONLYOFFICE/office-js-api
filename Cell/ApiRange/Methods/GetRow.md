# GetRow

Returns a row number for the selected cell.

## Syntax

```javascript
expression.GetRow();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a row number for the selected cell.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A9").GetRow();
oWorksheet.GetRange("A2").SetValue(oRange.toString());
```
