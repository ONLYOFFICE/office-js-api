# Bold

The font bold property.

## Syntax

expression.Bold; &#124; expression.Bold = isBold;

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isBold | Required | Boolean | Specifies that the text characters are displayed bold. |

## Returns

Boolean &#124; null

## Example

This example sets the bold property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.Bold = true;
builder.SaveFile("xlsx", "Bold.xlsx");
builder.CloseFile();
```