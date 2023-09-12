# GetRows

Returns the ApiRange object that represents all the cells on the rows range.

## Syntax

expression.GetRows(value);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| value | Required | String &#124; Number | Specifies the rows range in the string or number format. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null

## Example

This example shows how to get the ApiRange object that represents all the cells on the rows range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();
```