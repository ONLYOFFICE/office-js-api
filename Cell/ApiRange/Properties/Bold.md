# Bold

Sets the bold property to the text characters from the current cell or cell range. **Set-only**.

## Syntax

expression.Bold = isBold;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isBold | Required | Boolean | Specifies that the contents of the current cell / cell range are displayed bold. |

## Returns

This properties doesn't return any data.

## Example

This example sets the bold property to the text characters in the current cell or cell range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Bold text");
oWorksheet.GetRange("A2").Bold = true;
oWorksheet.GetRange("A3").SetValue("Normal text");
builder.SaveFile("xlsx", "Bold.xlsx");
builder.CloseFile();
```