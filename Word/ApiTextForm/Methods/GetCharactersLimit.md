# GetCharactersLimit

Returns a limit of the text field characters.

## Syntax

expression.GetCharactersLimit();

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a limit of the text field characters.

```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetCharactersLimit(5);
oTextForm.SetText("John Smith");
var nLimit = oTextForm.GetCharactersLimit();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Characters limit: " + nLimit);
oDocument.Push(oParagraph);
```
