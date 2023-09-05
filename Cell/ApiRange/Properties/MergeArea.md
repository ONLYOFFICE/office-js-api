# MergeArea

Returns the cell or cell range from the merge area. **Read-only**

## Syntax

expression.MergeArea;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the cell or cell range from the merge area.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3:E8").Merge(true);
oWorksheet.GetRange("B5").MergeArea.SetValue("MergeArea");
builder.SaveFile("xlsx", "MergeArea.xlsx");
builder.CloseFile();
```