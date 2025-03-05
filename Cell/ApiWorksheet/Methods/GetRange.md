# GetRange

Returns an object that represents the selected range of the current sheet. Can be a single cell - **A1**, or cellsfrom a single row - **A1:E1**, or cells from a single column - **A1:A10**, or cells from several rows and columns - **A1:E10**.

## Syntax

```javascript
expression.GetRange(Range1, Range2);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range1 | Required | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | The range of cells from the current sheet. |
| Range2 | Required | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | The range of cells from the current sheet. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example shows how to get an object that represents the selected range of the sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");
```
