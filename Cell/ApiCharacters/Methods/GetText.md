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
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let text = characters.GetText();
worksheet.GetRange("B3").SetValue("Text: " + text);
```
