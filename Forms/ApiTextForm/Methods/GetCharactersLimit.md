# GetCharactersLimit

Returns a limit of the text field characters.

## Syntax

```javascript
expression.GetCharactersLimit();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a limit of the text field characters.

```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetCharactersLimit(5);
textForm.SetText("John Smith");
let limit = textForm.GetCharactersLimit();
paragraph = Api.CreateParagraph();
paragraph.AddText("Characters limit: " + limit);
doc.Push(paragraph);
```
