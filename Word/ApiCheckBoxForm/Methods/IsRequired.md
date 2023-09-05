# IsRequired

Checks if the current form is required.<br>Inherited From: [ApiFormBase#IsRequired](../../ApiFormBase/Methods/IsRequired.md)

## Syntax

expression.IsRequired();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the current form is required.

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
builder.SaveFile("docx", "IsRequired.docx");
builder.CloseFile();
```