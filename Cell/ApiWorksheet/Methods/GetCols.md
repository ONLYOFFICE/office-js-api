# GetCols

Returns the ApiRange object that represents all the cells on the columns range.

## Syntax

expression.GetCols(sRange);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRange | Required | String | Specifies the columns range in the string format. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the ApiRange object that represents all the cells on the columns range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCols = oWorksheet.GetCols("A1:C1");
oCols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetCols.xlsx");
builder.CloseFile();
```