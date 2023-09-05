# ToFixed

Converts the current form to a fixed size form.<br>Inherited From: [ApiFormBase#ToFixed](../../ApiFormBase/Methods/ToFixed.md)

## Syntax

expression.ToFixed(nWidth, nHeight);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [twips](../../../Enumerations/twips.md) | The wrapper shape width measured in twentieths of a point (1/1440 of an inch). |
| nHeight | Required | [twips](../../../Enumerations/twips.md) | The wrapper shape height measured in twentieths of a point (1/1440 of an inch). |

## Returns

Boolean

## Example

This example converts the current form to a fixed size form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.ToFixed(7 * 240, 2 * 240);
var bFixed = oComboBoxForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToFixed.docx");
builder.CloseFile();
```