# SetOffset

Sets the cell offset.

## Syntax

expression.SetOffset(nRow, nCol);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nRow | Required | Number | The row number. |
| nCol | Required | Number | The column number. |

## Returns

This method doesn't return any data.

## Example

This example sets the cell offset.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B3").SetValue("Old Range");
var oRange = oWorksheet.GetRange("B3");
oRange.SetOffset(2, 2);
oRange.SetValue("New Range");
builder.SaveFile("xlsx", "SetOffset.xlsx");
builder.CloseFile();
```