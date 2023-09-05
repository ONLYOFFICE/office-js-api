# Delete

Deletes the Range object.

## Syntax

expression.Delete(shift);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| shift | Required | String | Specifies how to shift cells to replace the deleted cells ("up", "left"). |

## Returns

This method doesn't return any data.

## Example

This example deletes the Range object.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B4").SetValue("1");
oWorksheet.GetRange("C4").SetValue("2");
oWorksheet.GetRange("D4").SetValue("3");
oWorksheet.GetRange("C5").SetValue("5");
var oRange = oWorksheet.GetRange("C4");
oRange.Delete("up");
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();
```