# SetMultiline

Specifies if the current text field should be miltiline.

## Syntax

expression.SetMultiline(bMultiline);

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMultiline | Required | boolean |  | Defines if the current text field is multiline (true) or not (false). |

## Returns

boolean

## Example

This example specifies if the text field should be miltiline.

```javascript
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(3 * 240, 3 * 240);
textForm.SetMultiline(true);
let multiline = textForm.IsMultiline();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is multiline: " + multiline);
doc.Push(paragraph);
```
