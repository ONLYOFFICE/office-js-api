# FreezeAt

Sets the frozen cells in the active worksheet view. The range provided corresponds to cells that will be frozen in the top- and left-most pane.

## Syntax

expression.FreezeAt(frozenRange);

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| frozenRange | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; String | A range that represents the cells to be frozen panes. |

## Returns

This method doesn't return any data.

## Example

This example freezes the specified range in top-and-left-most pane of the worksheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = Api.GetRange('H2:K4');
oFreezePanes.FreezeAt(oRange);
builder.SaveFile("xlsx", "FreezeAt.xlsx");
builder.CloseFile();
```