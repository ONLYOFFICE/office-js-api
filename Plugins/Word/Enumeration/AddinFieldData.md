# AddinFieldData

The addin field data.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| FieldId | string | Field identifier. |
| Value | string | Field value. |
| Content | string | Field text content. |
## Type

Object



## Example

```javascript
var oAddinFieldData = &#123;"FieldId": "1", "Value": "Addin №1", "Content": "This is the first addin field"&#125;;
window.Asc.plugin.executeMethod("AddAddinField", [oAddinFieldData]);
