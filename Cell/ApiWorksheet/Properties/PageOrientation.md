# PageOrientation

Returns or sets the page orientation.

## Syntax

expression.PageOrientation; &#124; expression.PageOrientation = sPageOrientation;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sPageOrientation | Required | [PageOrientation](../../../Enumerations/PageOrientation.md) | The page orientation type |

## Returns

[PageOrientation](../../../Enumerations/PageOrientation.md)

## Example

This example sets the page orientation.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.PageOrientation = "xlPortrait";
var sPageOrientation = oWorksheet.PageOrientation;
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);
builder.SaveFile("xlsx", "PageOrientation.xlsx");
builder.CloseFile();
```