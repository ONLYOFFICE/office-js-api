# Index

Returns a sheet index. **Read-only**

## Syntax

expression.Index;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Returns

Number

## Example

This example shows how to get a sheet index.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nIndex = oWorksheet.Index;
oWorksheet.GetRange("A1").SetValue("Index: ");
oWorksheet.GetRange("B1").SetValue(nIndex);
builder.SaveFile("xlsx", "Index.xlsx");
builder.CloseFile();
```