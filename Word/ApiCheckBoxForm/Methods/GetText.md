# GetText

Returns the text from the current form.*Returns the value as a string if possible for the given form type*

## Syntax

expression.GetText();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the text from the form.

```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var sText = oTextForm.GetText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form text: " + sText);
oDocument.Push(oParagraph);
```
