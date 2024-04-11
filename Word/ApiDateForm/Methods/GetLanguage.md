# GetLanguage

Gets date language from current form.

## Syntax

expression.GetLanguage();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the date language from a date form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetLanguage("en-CA");
var sLangId = oDateForm.GetLanguage();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first date form from this document has setted language: " + sLangId);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetLanguage.docx");
builder.CloseFile();
```