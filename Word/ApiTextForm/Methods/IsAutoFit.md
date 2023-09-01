# IsAutoFit

Checks if the text field content is autofit, i.e. whether the font size adjusts to the size of the fixed size form.

## Syntax

expression.IsAutoFit();

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the text field content is autofit.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var bAutoFit = oTextForm.IsAutoFit();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is autofit: " + bAutoFit);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsAutoFit.docx");
builder.CloseFile();
```