# AlignHorizontal

Sets the text horizontal alignment to the current cell range. **Set-only**.

## Syntax

expression.AlignHorizontal = sAlignment;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAlignment | Required | [XlHorAlign](../../../Enumerations/XlHorAlign) | The horizontal alignment that will be applied to the cell contents. |

## Returns

This properties doesn't return any data.

## Example

This example sets the horizontal alignment of the text in the cell range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.AlignHorizontal = "center";
builder.SaveFile("xlsx", "AlignHorizontal.xlsx");
builder.CloseFile();
```