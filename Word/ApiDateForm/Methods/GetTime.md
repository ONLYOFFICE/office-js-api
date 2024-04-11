# GetTime

Gets date time from current form.

## Syntax

expression.GetTime();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the date timestamp from a date form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetTime(new Date().getTime());
var nTimeStamp = oDateForm.GetTime();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first date form from this document has setted time: " + new Date(nTimeStamp));
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTime.docx");
builder.CloseFile();
```