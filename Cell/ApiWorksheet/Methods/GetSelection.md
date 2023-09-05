# GetSelection

Returns an object that represents the selected range.

## Syntax

expression.GetSelection();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get an object that represents the selected range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetSelection().SetValue("selected");
builder.SaveFile("xlsx", "GetSelection.xlsx");
builder.CloseFile();
```