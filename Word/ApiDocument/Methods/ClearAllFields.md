# ClearAllFields

Clears all forms in the document.

## Syntax

expression.ClearAllFields();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example clears all forms in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
oParagraph.AddLineBreak();
oParagraph.AddElement(oTextForm);
oDocument.ClearAllFields();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("All fields from this document were just cleared.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ClearAllFields.docx");
builder.CloseFile();
```