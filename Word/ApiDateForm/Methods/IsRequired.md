# IsRequired

Checks if the current form is required.<br>Inherited From: [ApiFormBase#IsRequired](../../ApiFormBase/Methods/IsRequired.md)

## Syntax

expression.IsRequired();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the current form is required.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
var bRequired = oDateForm.IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsRequired.docx");
builder.CloseFile();
```