# SetMultiline

Specifies if the current text field should be miltiline.

## Syntax

expression.SetMultiline(bMultiline);

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bMultiline | Required | Boolean | Defines if the current text field is multiline (true) or not (false). |

## Returns

Boolean (returns false, if the text field is not fixed size)

## Example

This example specifies if the text field should be miltiline.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.ToFixed(3 * 240, 3 * 240);
oTextForm.SetMultiline(true);
var bMultiline = oTextForm.IsMultiline();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is multiline: " + bMultiline);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetMultiline.docx");
builder.CloseFile();
```