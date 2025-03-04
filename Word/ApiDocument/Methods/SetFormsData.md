# SetFormsData

Sets the data to the specified forms.

## Syntax

```javascript
expression.SetFormsData(arrData);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrData | Required | [FormData[]](../../Enumeration/FormData.md) |  | An array of form data to set to the specified forms. |

## Returns

boolean

## Example

This example shows how to set data to forms.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
paragraph1.Push(textForm);

doc.SetFormsData([
    {key: "BestCompany", value: true},
    {key: "CompanyName", value: "OnlyOffice"}
]);

```
