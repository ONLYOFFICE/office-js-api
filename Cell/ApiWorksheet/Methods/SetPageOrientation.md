# SetPageOrientation

Sets the page orientation.

## Syntax

expression.SetPageOrientation(sPageOrientation);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sPageOrientation | Required | [PageOrientation](../../../Enumerations/PageOrientation.md) | The page orientation type |

## Returns

This method doesn't return any data.

## Example

This example sets the page orientation.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPageOrientation("xlPortrait");
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);
builder.SaveFile("xlsx", "SetPageOrientation.xlsx");
builder.CloseFile();
```