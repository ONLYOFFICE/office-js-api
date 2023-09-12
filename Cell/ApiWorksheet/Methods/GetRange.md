# GetRange

Returns an object that represents the selected range of the current sheet. Can be a single cell - A1, or cells from a single row - A1:E1, or cells from a single column - A1:A10, or cells from several rows and columns - A1:E10.

## Syntax

expression.GetRange(Range1, Range2);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Range1 | Required | String &#124; [ApiRange](../../ApiRange/ApiRange.md) | The range of cells from the current sheet. |
| Range2 | Required | String &#124; [ApiRange](../../ApiRange/ApiRange.md) | The range of cells from the current sheet. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null (returns null if such a range does not exist)

## Example

This example shows how to get an object that represents the selected range of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetAlignHorizontal("center");
builder.SaveFile("xlsx", "GetRange.xlsx");
builder.CloseFile();
```