# SetText

Sets the text for the specified characters.

## Syntax

expression.SetText(Text);

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Text | Required | String | The text to be set. |

## Returns

This method doesn't return any data.

## Example

This example sets the text for the specified characters.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.SetText("string");
builder.SaveFile("xlsx", "SetText.xlsx");
builder.CloseFile();
```