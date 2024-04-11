# SetRequired

Specifies if the current form should be required.<br>Inherited From: [ApiFormBase#SetRequired](../../ApiFormBase/Methods/SetRequired.md)

## Syntax

expression.SetRequired(bRequired);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bRequired | Required | Boolean | Defines if the current form is required (true) or not (false). |

## Returns

Boolean

## Example

This example specifies if the form should be required.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": false, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetRequired(true);
var bRequired = oDateForm.IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetRequired.docx");
builder.CloseFile();
```