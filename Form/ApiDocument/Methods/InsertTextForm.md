# InsertTextForm

Inserts a text box with the specified text box properties over the selected text.

## Syntax

expression.InsertTextForm(oFormPr);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [TextFormInsertPr](../../../Enumerations/TextFormInsertPr.md) | Properties for inserting a text field. |

## Returns

[ApiTextForm](../../../Word/ApiTextForm/ApiTextForm.md)

## Example

This example inserts a text box with the specified text box properties over the selected text.

```javascript
builder.CreateFile("docx");
var oDocument = editor.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("First name");
oParagraph.Select();
oDocument.InsertTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false});
builder.SaveFile("docx", "InsertTextForm.docx");
builder.CloseFile();
```