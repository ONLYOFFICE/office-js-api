# IsFixed

Checks if the current form is fixed size.<br>Inherited From: [ApiFormBase#IsFixed](../../ApiFormBase/Methods/IsFixed.md)

## Syntax

expression.IsFixed();

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example checks if the current form is fixed size.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.ToFixed(7 * 240, 2 * 240);
var bFixed = oComboBoxForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is fixed: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsFixed.docx");
builder.CloseFile();
```