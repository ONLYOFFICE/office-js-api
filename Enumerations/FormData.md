# FormData

Data of a form.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| key | Required | String | The key of the form. If this form is a radiobutton, then the key is the group key. |
| value | Required | String &#124; Boolean | Form data. |
| type | Optional | [FormSpecificType](./FormSpecificType.md) | The scpecific type of the form. |
| tag | Optional | String | Form tag. |

## Example

Report on all review changes that contains two review records for every user.

```javascript
var oFormData = {key: "CompanyName", value: "OnlyOffice", type: "text"};
```
