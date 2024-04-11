# CreateDateForm

Creates a date field with the specified date field properties.

## Syntax

expression.CreateDateForm(oFormPr);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [DateFormPr](../../../Enumerations/DateFormPr.md) | date field properties. |

## Returns

[ApiDateForm](../../../Word/ApiDateForm/ApiDateForm.md)

## Example

This example creates a date form with the common and specific date form properties.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
builder.SaveFile("docxf", "CreateDateForm.docxf");
builder.CloseFile();
```