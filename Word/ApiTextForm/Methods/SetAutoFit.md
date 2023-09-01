# SetAutoFit

Specifies if the text field content should be autofit, i.e. whether the font size adjusts to the size of the fixed size form.

## Syntax

expression.SetAutoFit(bAutoFit);

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bAutoFit | Required | Boolean | Defines if the text field content is autofit (true) or not (false). |

## Returns

Boolean

## Example

This example specifies if the text field content should be autofit.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.ToFixed(6 * 240, 2 * 240);
oTextForm.SetAutoFit(true);
var bAutoFit = oTextForm.IsAutoFit();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is autofit: " + bAutoFit);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetAutoFit.docx");
builder.CloseFile();
```