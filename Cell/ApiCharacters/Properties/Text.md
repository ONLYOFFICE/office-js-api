# Text

The string value representing the text of the specified range of characters.

## Syntax

expression.Text; &#124; expression.Text = Text;

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Text | Required | String | The text to be set. |

## Returns

String

## Example

This example sets the text for the specified characters.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.Text = "string";
var oText = oCharacters.Text;
Api.GetActiveSheet().GetRange("A1").SetValue("Text: ", oText)
builder.SaveFile("xlsx", "Text.xlsx");
builder.CloseFile();
```