# Selection

Returns an object that represents the selected range. **Read-only**

## Syntax

expression.Selection;

`expression` - A variable that represents a [Api](../Api.md) class.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get an object that represents the selected range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Api.Selection.SetValue("selected");
builder.SaveFile("xlsx", "Selection.xlsx");
builder.CloseFile();
```