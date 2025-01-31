# GetCol

Returns a column number for the selected cell.

## Syntax

```javascript
expression.GetCol();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a column number for the selected cell.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("D9").GetCol();
oWorksheet.GetRange("A2").SetValue(oRange.toString());
```
