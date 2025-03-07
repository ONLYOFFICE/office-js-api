# SetOffset

Sets the cell offset.

## Syntax

```javascript
expression.SetOffset(nRow, nCol);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The row number. |
| nCol | Required | number |  | The column number. |

## Returns

This method doesn't return any data.

## Example

This example sets the cell offset.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("Old Range");
let range = worksheet.GetRange("B3");
range.SetOffset(2, 2);
range.SetValue("New Range");
```
