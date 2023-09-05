# ToFixed

Converts the current form to a fixed size form.<br>Inherited From: [ApiFormBase#ToFixed](../../ApiFormBase/Methods/ToFixed.md)

## Syntax

expression.ToFixed(nWidth, nHeight);

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

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
builder.SaveFile("docx", "ToFixed.docx");
builder.CloseFile();
```