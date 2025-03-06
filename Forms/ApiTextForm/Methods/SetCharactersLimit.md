# SetCharactersLimit

Sets a limit to the text field characters.

## Syntax

```javascript
expression.SetCharactersLimit(nChars);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nChars | Required | number |  | The maximum number of characters in the text field. If this parameter is equal to -1, no limit will be set.\ A limit is required to be set if a comb of characters is applied.\ Maximum value for this parameter is 1000000. |

## Returns

boolean

## Example

This example sets a limit to the text field characters.

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
