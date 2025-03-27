# SetAutoFit

Specifies if the text field content should be autofit, i.e. whether the font size adjusts to the size of the fixed size form.

## Syntax

```javascript
expression.SetAutoFit(bAutoFit);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAutoFit | Required | boolean |  | Defines if the text field content is autofit (true) or not (false). |

## Returns

boolean

## Example

This example specifies if the text field content should be autofit.

```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(6 * 240, 2 * 240);
textForm.SetAutoFit(true);
let autoFit = textForm.IsAutoFit();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is autofit: " + autoFit);
doc.Push(paragraph);
```
