# FormData

Form data.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | string | The form key. If the current form is a radio button, then this field contains the group key. |
| value | string \| boolean | The current field value. |
| tag | string | The form tag. |
| type | [FormSpecificType](../Enumeration/FormSpecificType.md) | The form type. |


## Example

Report on all review changes that contains two review records for every user.

```javascript editor-pptx
let formData = {key: "CompanyName", value: "OnlyOffice", type: "text"};
```
