# SetLanguage

Sets date language to current form.

## Syntax

expression.SetLanguage(sLangId);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | String | The possible value for this parameter is a language identifier as defined by * RFC 4646/BCP 47. Example: "en-CA". |

## Returns

Boolean

## Example

This example shows how to set the date language in a date form.

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
builder.SaveFile("docx", "SetLanguage.docx");
builder.CloseFile();
```