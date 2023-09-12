# Underline

Sets the type of underline applied to the font. **Set-only**.

## Syntax

expression.Underline = undelineType;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| undelineType | Required | [XlUnderlineType](../../../Enumerations/XlUnderlineType.md) | Specifies the type of the line displayed under the characters. |

## Returns

This property doesn't return any data.

## Example

This example specifies that the contents of the current cell is displayed along with a line appearing directly below the character.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("The text underlined with a single line");
oWorksheet.GetRange("A2").Underline = "single";
oWorksheet.GetRange("A4").SetValue("Normal text");
builder.SaveFile("xlsx", "Underline.xlsx");
builder.CloseFile();
```