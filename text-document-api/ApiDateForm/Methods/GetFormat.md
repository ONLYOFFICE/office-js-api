# GetFormat

Gets the date format of the current form.

## Syntax

```javascript
expression.GetFormat();
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the date format from a date form.

```javascript editor-docx
let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetFormat("dddd, dd MMMM yyyy");
let format = dateForm.GetFormat();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has format: " + format);
doc.Push(paragraph);
```
