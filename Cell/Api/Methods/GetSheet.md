# GetSheet

Returns an object that represents a sheet.

## Syntax

expression.GetSheet(nameOrIndex);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nameOrIndex | Required | String &#124; Number | Sheet name or sheet index. |

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) &#124; null

## Example

This example shows how to get an object that represents a sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetSheet("Sheet1");
oWorksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");
builder.SaveFile("xlsx", "GetSheet.xlsx");
builder.CloseFile();
```