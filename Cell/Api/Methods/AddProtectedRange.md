# AddProtectedRange

Creates a protected range of the specified type from the selected data range of the current sheet.

## Syntax

expression.AddProtectedRange(sTitle, sDataRange);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | String | The title which will be displayed for the current protected range. |
| sDataRange | Required | String | The selected cell range which will be used to get the data for the protected range. |

## Returns

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md) &#124; null (returns null if cannot be added)

## Example

This example adds a new name to a range of cells.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
builder.SaveFile("xlsx", "protectedRange.xlsx");
builder.CloseFile();
```