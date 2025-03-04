# FormData

Form data.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | [string](../../Word/string/string.md) | The form key. If the current form is a radio button, then this field contains the group key. |
| value | [string](../../Word/string/string.md) \| [boolean](../../Word/boolean/boolean.md) | The current field value. |
| tag | [string](../../Word/string/string.md) | The form tag. |
| type | [FormSpecificType](../Enumeration/FormSpecificType.md) | The form type. |


## Example

Report on all review changes that contains two review records for every user.

```javascript editor-pdf
let formData = {key: "CompanyName", value: "OnlyOffice", type: "text"};
```
