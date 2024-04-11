# SetFormat

Sets date format to current form.

## Syntax

expression.SetFormat(sFormat);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | String | Specifies the date format set in the form. |

## Returns

Boolean

## Example

This example shows how to set the date format on a date form.

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
builder.SaveFile("docx", "SetFormat.docx");
builder.CloseFile();
```