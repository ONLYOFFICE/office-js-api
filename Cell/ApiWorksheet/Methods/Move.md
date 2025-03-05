# Move

Moves the current sheet to another location in the workbook.

## Syntax

```javascript
expression.Move(before, after);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| before | Required | [ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) |  | The sheet before which the current sheet will be placed. You cannot specify "before" if you specify "after". |
| after | Required | [ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) |  | The sheet after which the current sheet will be placed. You cannot specify "after" if you specify "before". |

## Returns

This method doesn't return any data.

## Example

This example moves the sheet to another location in the workbook.

```javascript editor-xlsx
let sheet1 = Api.GetActiveSheet();
Api.AddSheet("Sheet2");
let sheet2 = Api.GetActiveSheet();
sheet2.Move(sheet1);
```
