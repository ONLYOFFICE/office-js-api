# GetFormat

Gets date format from current form.

## Syntax

expression.GetFormat();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the date format from a date form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetFormat("dddd, dd MMMM yyyy");
var sFormat = oDateForm.GetFormat();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first date form from this document has format: " + sFormat);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFormat.docx");
builder.CloseFile();
```