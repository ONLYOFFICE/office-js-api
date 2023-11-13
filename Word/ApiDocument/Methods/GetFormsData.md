# GetFormsData

Returns an array of form data for all forms presented in the documenta.

## Syntax

expression.GetFormsData();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[Array<[FormData](../../../Enumerations/FormData.md)>]

## Example

This example showh how to get the data for all forms added to the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
var oCheckBox = Api.CreateCheckBoxForm({key: "BestCompany"});
oCheckBox.SetChecked(true);
oParagraph1.Push(oCheckBox);
var oTextForm = Api.CreateTextForm({key: "CompanyName"});
oTextForm.SetText("OnlyOffice");
oParagraph1.Push(oTextForm);

var sText = JSON.stringify(oDocument.GetFormsData());
let oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText(sText);
oDocument.Push(oParagraph2);

builder.SaveFile("docx", "GetFormsData.docx");
builder.CloseFile();
```
