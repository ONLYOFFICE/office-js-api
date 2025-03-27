# RemoveOleObject

Removes the OLE object from the document by its internal ID.

## Syntax

```javascript
expression.RemoveOleObject(sInternalId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sInternalId | Required | string |  | The OLE object identifier which is used to work with OLE object added to the document. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("RemoveOleObject", ["5_556"]);
```
