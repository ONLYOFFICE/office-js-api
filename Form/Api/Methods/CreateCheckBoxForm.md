# CreateCheckBoxForm

Creates a checkbox / radio button with the specified checkbox / radio button properties.

## Syntax

expression.CreateCheckBoxForm(oFormPr);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [CheckBoxFormPr](../../../Enumerations/CheckBoxFormPr.md) | Checkbox &#124; radio button properties. |

## Returns

[ApiCheckBoxForm](../../../Word/ApiCheckBoxForm/ApiCheckBoxForm.md)

## Example

This example creates two checkboxes.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
builder.SaveFile("docxf", "CreateCheckBoxForm.docxf");
builder.CloseFile();
```