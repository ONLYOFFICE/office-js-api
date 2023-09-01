# IsRequired

Checks if the current form is required.<br>Inherited From: [ApiFormBase#IsRequired](../../ApiFormBase/Methods/IsRequired.md)

## Syntax

expression.IsRequired();

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the current form is required.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var bRequired = oTextForm.IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsRequired.docx");
builder.CloseFile();
```