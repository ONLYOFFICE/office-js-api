# SetFormsData

Returns an array of form data for all forms presented in the documenta.

## Syntax

expression.SetFormsData();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| arrData | Required | [Array<[FormData](../../../Enumerations/FormData.md)>] | The data for the specified forms. |

## Returns

This method doesn't return any data.

## Example

This example showh how to set data to forms.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
var oCheckBox = Api.CreateCheckBoxForm({key: "BestCompany"});
oParagraph1.Push(oCheckBox);
var oTextForm = Api.CreateTextForm({key: "CompanyName"});
oParagraph1.Push(oTextForm);

oDocument.SetFormsData([
    {key: "BestCompany", value: true},
    {key: "CompanyName", value: "OnlyOffice"}
]);

builder.SaveFile("docx", "SetFormsData.docx");
builder.CloseFile();
```
