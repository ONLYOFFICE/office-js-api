# IsAutoFit

Checks if the text field content is autofit, i.e. whether the font size adjusts to the size of the fixed size form.

## Syntax

```javascript
expression.IsAutoFit();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if the text field content is autofit.

```javascript
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let autoFit = textForm.IsAutoFit();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is autofit: " + autoFit);
doc.Push(paragraph);
```
