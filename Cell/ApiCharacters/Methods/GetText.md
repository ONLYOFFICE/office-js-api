# GetText

Returns the text of the specified range of characters.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the text of the specified range of characters.

```javascript editor-xlsx
// How to get a raw text from the characters.

// Retrieve a text from the character collection.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var sText = oCharacters.GetText();
oWorksheet.GetRange("B3").SetValue("Text: " + sText);
```
