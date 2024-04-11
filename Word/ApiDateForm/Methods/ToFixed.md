# ToFixed

Converts the current form to a fixed size form.<br>Inherited From: [ApiFormBase#ToFixed](../../ApiFormBase/Methods/ToFixed.md)

## Syntax

expression.ToFixed(nWidth, nHeight);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

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
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.ToFixed(10 * 240, 2 * 240);
var bFixed = oDateForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ToFixed.docx");
builder.CloseFile();
```