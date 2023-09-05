# Characters

Returns the ApiCharacters object that represents a range of characters within the object text. Use the ApiCharacters object to format characters within a text string. **Read-only**

## Syntax

expression.Characters;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

[ApiCharacters](../../ApiCharacters/ApiCharacters.md)

## Example

This example shows how to get the ApiCharacters object that represents a range of characters within the object text.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.Characters;
var oFont = oCharacters.GetFont();
oFont.SetBold(true);
builder.SaveFile("xlsx", "Characters.xlsx");
builder.CloseFile();
```