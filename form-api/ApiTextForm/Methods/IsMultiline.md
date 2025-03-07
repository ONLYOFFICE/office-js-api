# IsMultiline

Checks if the current text field is multiline.

## Syntax

```javascript
expression.IsMultiline();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if the text field is multiline.

```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let multiline = textForm.IsMultiline();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is multiline: " + multiline);
doc.Push(paragraph);
```
