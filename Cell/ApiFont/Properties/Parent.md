# Parent

The parent object of the specified font object.  **Read-only**

## Syntax

expression.Parent;

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Returns

[ApiCharacters](../../ApiCharacters/ApiCharacters.md)

## Example

This example shows how to get the parent ApiCharacters object of the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var oFont = oCharacters.GetFont();
var oParent = oFont.Parent;
oParent.SetText("string");
builder.SaveFile("xlsx", "Parent.xlsx");
builder.CloseFile();