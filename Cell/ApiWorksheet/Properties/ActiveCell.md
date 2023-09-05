# ActiveCell

Returns an object that represents an active cell. **Read-only**

## Syntax

expression.ActiveCell;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Returns

[ApiRange](../../ApiRange.md)

## Example

This example shows how to get an object that represents an active cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oActiveCell = oWorksheet.ActiveCell;
oActiveCell.SetValue("This sample text was placed in an active cell.");
builder.SaveFile("xlsx", "ActiveCell.xlsx");
builder.CloseFile();
```