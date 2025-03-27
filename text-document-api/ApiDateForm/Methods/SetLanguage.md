# SetLanguage

Sets the date language to the current form.

## Syntax

```javascript
expression.SetLanguage(sLangId);
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | string |  | The date language. The possible value for this parameter is a language identifier as defined in\ RFC 4646/BCP 47. Example: "en-CA". |

## Returns

boolean

## Example

This example shows how to set the date language in a date form.

```javascript editor-docx
let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetLanguage("en-CA");
let langId = dateForm.GetLanguage();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted language: " + langId);
doc.Push(paragraph);
```
