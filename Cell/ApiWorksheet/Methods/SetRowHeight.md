# SetRowHeight

Sets the height of the specified row measured in points. A point is 1/72 inch.

## Syntax

expression.SetRowHeight(nRow, nHeight);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nRow | Required | Number | The number of the row to set the height to. |
| nHeight | Required | Number | The height of the row measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the height of the specified row measured in points.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetRowHeight(0, 30);
builder.SaveFile("xlsx", "SetRowHeight.xlsx");
builder.CloseFile();
```
