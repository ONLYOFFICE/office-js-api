# SetFormat

Sets the date format to the current form.

## Syntax

```javascript
expression.SetFormat(sFormat);
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | string |  | The date format. For example, mm.dd.yyyy |

## Returns

boolean

## Example

This example shows how to set the date format on a date form.

```javascript editor-pdf
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
