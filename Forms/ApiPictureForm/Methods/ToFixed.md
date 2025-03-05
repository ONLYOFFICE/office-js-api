# ToFixed

Converts the current form to a fixed size form.

## Syntax

```javascript
expression.ToFixed(width, height, keepPosition);
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [twips](../../Enumeration/twips.md) |  | The wrapper shape width measured in twentieths of a point (1/1440 of an inch). |
| height | Required | [twips](../../Enumeration/twips.md) |  | The wrapper shape height measured in twentieths of a point (1/1440 of an inch). |
| keepPosition | Required | boolean |  | Save position on the page (it can be a little bit slow, because it runs the document calculation). |

## Returns

boolean

## Example

This example converts the form to a fixed size form.

```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let fixed = textForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
doc.Push(paragraph);
```
