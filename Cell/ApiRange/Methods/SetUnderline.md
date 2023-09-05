# SetUnderline

Specifies that the contents of the current cell / cell range are displayed along with a line appearing directly below the character.

## Syntax

expression.SetUnderline(undelineType);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| undelineType | Required | [XlUnderlineType](../../../Enumerations/XlUnderlineType.md) | Specifies the type of the line displayed under the characters. |

## Returns

This method doesn't return any data.

## Example

This example specifies that the contents of the current cell is displayed along with a line appearing directly below the character.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("The text underlined with a single line");
oWorksheet.GetRange("A2").SetUnderline("single");
oWorksheet.GetRange("A4").SetValue("Normal text");
builder.SaveFile("xlsx", "SetUnderline.xlsx");
builder.CloseFile();
```