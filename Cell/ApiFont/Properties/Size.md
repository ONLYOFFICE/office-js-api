# Size

The font size property.

## Syntax

expression.Size; &#124; expression.Size = Size;

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Size | Required | Number | Font size. |

## Returns

Number &#124; null

## Example

This example sets the font size property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.Size = 18;
builder.SaveFile("xlsx", "Size.xlsx");
builder.CloseFile();
```