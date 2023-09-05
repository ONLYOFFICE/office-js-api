# SetRowHeight

Sets the row height value.

## Syntax

expression.SetRowHeight(nHeight);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nHeight | Required | [pt](../../../Enumerations/pt.md) | The row height in the current range measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the row height value.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetRowHeight(32);
builder.SaveFile("xlsx", "SetRowHeight.xlsx");
builder.CloseFile();
```