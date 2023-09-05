# Strikeout

Sets a value that indicates whether the contents of the current cell or cell range are displayed struck through.  **Set-only**.

## Syntax

expression.Strikeout = isStrikeout;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | Boolean | Specifies if the contents of the current cell / cell range are displayed struck through. |

## Returns

This property doesn't return any data.

## Example

This example specifies that the contents of the cell is displayed with a single horizontal line through the center of the contents.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Struckout text");
oWorksheet.GetRange("A2").Strikeout = true;
oWorksheet.GetRange("A3").SetValue("Normal text");
builder.SaveFile("xlsx", "Strikeout.xlsx");
builder.CloseFile();
```