# IsFixed

Checks if the current form is fixed size.<br>Inherited From: [ApiFormBase#IsFixed](../../ApiFormBase/Methods/IsFixed.md)

## Syntax

expression.IsFixed();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the current form is fixed size.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oCheckBoxForm.ToFixed(2 * 240, 1 * 240);
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
oCheckBoxForm.ToFixed(2 * 240, 1 * 240);
var bFixed = oCheckBoxForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The second form from this document has a fixed size: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsFixed.docx");
builder.CloseFile();
```