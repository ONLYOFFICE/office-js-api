# GetLanguage

Gets the used date language of the current form.

## Syntax

```javascript
expression.GetLanguage();
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the date language from a date form.

```javascript editor-pdf
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
