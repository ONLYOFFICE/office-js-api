# AlignVertical

Sets the text vertical alignment to the current cell range. **Set-only**.

## Syntax

expression.AlignVertical = sAligment;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAligment | Required | [XlVertAlign](../../../Enumerations/XlVertAlign.md) | The vertical alignment that will be applied to the cell contents. |

## Returns

This properties doesn't return any data.

## Example

This example sets the vertical alignment of the text in the cell range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:D5");
oWorksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
oRange.AlignVertical = "distributed";
builder.SaveFile("xlsx", "AlignVertical.xlsx");
builder.CloseFile();