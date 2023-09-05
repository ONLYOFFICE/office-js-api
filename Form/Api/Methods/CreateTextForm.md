# CreateTextForm

Creates a text field with the specified text field properties.

## Syntax

expression.CreateTextForm(oFormPr);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [TextFormPr](../../../Enumerations/TextFormPr.md) | Text field properties. |

## Returns

[ApiTextForm](../../../Word/ApiTextForm/ApiTextForm.md)

## Example

This example creates a a text form with the common and specific text form properties.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
builder.SaveFile("docxf", "CreateTextForm.docxf");
builder.CloseFile();
```