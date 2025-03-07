# SetRequired

Specifies if the current form should be required.

## Syntax

```javascript
expression.SetRequired(bRequired);
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | Required | boolean |  | Defines if the current form is required (true) or not (false). |

## Returns

boolean

## Example

This example specifies if the current form should be required.

```javascript editor-docx
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetRequired(true);
let required = textForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
