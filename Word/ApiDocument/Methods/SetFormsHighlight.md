# SetFormsHighlight

Sets the highlight to the forms in the document.

## Syntax

expression.SetFormsHighlight(r, g, b, bNone?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | type | Red color component value. |
| g | Required | type | Green color component value. |
| b | Required | type | Blue color component value. |
| bNone | Optional | type | Defines that highlight will not be set. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example sets the highlight to the forms in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oDocument.SetFormsHighlight(255, 111, 61);
builder.SaveFile("docx", "SetFormsHighlight.docx");
builder.CloseFile();
```