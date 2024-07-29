# SetFormsData

Sets the data to the specified forms.

## Syntax

expression.SetFormsData(arrData);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrData | Required | Array.<[FormData](../../Enumeration/FormData.md)> |  | An array of form data to set to the specified forms. |

## Returns

This method doesn't return any data.

## Example

This example showh how to set data to forms.

```javascript
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
```
