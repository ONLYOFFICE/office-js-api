# Save

Saves changes to the specified document.

## Syntax

expression.Save();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example saves changes to the specified document.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();
builder.SaveFile("xlsx", "Save.xlsx");
builder.CloseFile();
```