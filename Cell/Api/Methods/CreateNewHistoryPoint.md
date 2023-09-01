# CreateNewHistoryPoint

Creates a new history point.

## Syntax

expression.CreateNewHistoryPoint();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example creates a new history point.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
oWorksheet.GetRange("A3").SetValue("New history point was just created.");
builder.SaveFile("xlsx", "CreateNewHistoryPoint.xlsx");
builder.CloseFile();
```