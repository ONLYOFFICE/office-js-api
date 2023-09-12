# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame. The null value will be returned for the inline forms.<br>Inherited From: [ApiFormBase#GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md)

## Syntax

expression.GetWrapperShape();

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md) &#124; null

## Example

This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.ToFixed(7 * 240, 2 * 240);
var oShape = oComboBoxForm.GetWrapperShape();
var oStroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oShape.SetOutLine(oStroke);
builder.SaveFile("docx", "GetWrapperShape.docx");
builder.CloseFile();
```