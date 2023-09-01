# Format

Returns a class formatted according to the instructions contained in the format expression.

## Syntax

expression.Format(expression, format?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| expression | Required | String | Any valid expression. |
| format | Optional | String | A valid named or user-defined format expression. Dedault value is "null". |

## Returns

String

## Example

This example shows how to get a class formatted according to the instructions contained in the format expression.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFormat = Api.Format("123456", ["$#,##0"]);
oWorksheet.GetRange("A1").SetValue(oFormat);
builder.SaveFile("xlsx", "Format.xlsx");
builder.CloseFile();
```