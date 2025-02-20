# IsFixed

Checks if the current form is fixed size.

## Syntax

```javascript
expression.IsFixed();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if the current form is fixed size.

```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let fixed = textForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);
```
