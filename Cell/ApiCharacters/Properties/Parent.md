# Parent

The parent object of the specified characters. **Read-only**

## Syntax

expression.Parent;

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the parent object of the specified characters.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var oParent = oCharacters.Parent;
oParent.SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
builder.SaveFile("xlsx", "Parent.xlsx");
builder.CloseFile();
```