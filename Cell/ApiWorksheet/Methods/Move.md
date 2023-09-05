# Move

Moves the current sheet to another location in the workbook.

## Syntax

expression.Move(before, after);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| before | Required | [ApiWorksheet](../ApiWorksheet.md) | The sheet before which the current sheet will be placed. You cannot specify "before" if you specify "after" |
| after | Required | [ApiWorksheet](../ApiWorksheet.md) | The sheet after which the current sheet will be placed. You cannot specify "after" if you specify "before". |

## Returns

This method doesn't return any data.

## Example

This example moves the sheet to another location in the workbook.

```javascript
builder.CreateFile("xlsx");
var oSheet1 = Api.GetActiveSheet();
Api.AddSheet("Sheet2");
var oSheet2 = Api.GetActiveSheet();
oSheet2.Move(oSheet1);
builder.SaveFile("xlsx", "Move.xlsx");
builder.CloseFile();
```