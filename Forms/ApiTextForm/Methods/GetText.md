# GetText

Returns the text from the current form.
Returns the value as a string if possible for the given form type*

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the text from the form.

```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let text = textForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
