# Rows

Returns the ApiRange object that represents the rows of the specified range. **Read-only**

## Syntax

expression.Rows;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

[ApiRange](../ApiRange.md)

## Example

This example shows how to get the ApiRange object that represents the rows of the specified range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:A3");
oRange.ForEach(function (range) {
	ar oRows = oRange.Rows;    
	oRows.SetValue(i);
});
builder.SaveFile("xlsx", "Rows.xlsx");
builder.CloseFile();
```