# SelectOleObject

Selects the specified OLE object.

## Syntax

```javascript
expression.SelectOleObject(id);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | The OLE object identifier which is used to work with OLE object added to the document. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("SelectOleObject", ["5_665"]);
```
