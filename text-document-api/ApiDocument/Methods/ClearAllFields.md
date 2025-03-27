# ClearAllFields

Clears all forms in the document.

## Syntax

```javascript
expression.ClearAllFields();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example clears all forms in the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
paragraph.AddLineBreak();
paragraph.AddElement(textForm);
doc.ClearAllFields();
paragraph = Api.CreateParagraph();
paragraph.AddText("All fields from this document were just cleared.");
doc.Push(paragraph);
```
