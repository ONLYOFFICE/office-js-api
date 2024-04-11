# IsFixed

Checks if the current form is fixed size.<br>Inherited From: [ApiFormBase#IsFixed](../../ApiFormBase/Methods/IsFixed.md)

## Syntax

expression.IsFixed();

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the current form is fixed size.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.ToFixed(10 * 240, 2 * 240);
var bFixed = oDateForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is fixed: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsFixed.docx");
builder.CloseFile();
```