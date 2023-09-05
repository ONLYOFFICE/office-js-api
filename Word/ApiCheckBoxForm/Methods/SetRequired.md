# SetRequired

Specifies if the current form should be required.<br>Inherited From: [ApiFormBase#SetRequired](../../ApiFormBase/Methods/SetRequired.md)

## Syntax

expression.SetRequired(bRequired);

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

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
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
oCheckBoxForm.SetRequired(true);
var bRequired = oCheckBoxForm.IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The second form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetRequired.docx");
builder.CloseFile();
```