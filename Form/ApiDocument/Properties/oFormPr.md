# oFormPr

Properties for inserting a text field.

## Syntax

expression.oFormPr

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Type

[TextFormInsertPr](../../../Enumerations/TextFormInsertPr.md)

## Returns

[TextFormInsertPr](../../../Enumerations/TextFormInsertPr.md)

## Example

This example inserts a text box with the specified text box properties over the selected text.

```javascript
builder.CreateFile("docx");
var oDocument = editor.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("First name");
oParagraph.Select();
oDocument.InsertTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false});
builder.SaveFile("docx", "oFormPr.docx");
builder.CloseFile();
```