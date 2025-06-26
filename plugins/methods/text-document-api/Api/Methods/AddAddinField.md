# AddAddinField

Creates a new addin field with the data specified in the request.

## Syntax

```javascript
expression.AddAddinField(data);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | [AddinFieldData](../../Enumeration/AddinFieldData.md) |  | Addin field data. |

## Returns

This method doesn't return any data.

## Example

```javascript
let addinFieldData = {"FieldId": "1", "Value": "Addin №1", "Content": "This is the first addin field"};
window.Asc.plugin.executeMethod("AddAddinField", [addinFieldData]);
```
