# RemoveOleObjects

Removes several OLE objects from the document by their internal IDs.

## Syntax

```javascript
expression.RemoveOleObjects(arrObjects);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrObjects | Required | [OLEObjectData](../../Enumeration/OLEObjectData.md)[] |  | An array of the identifiers which are used to work with OLE objects added to the document. Example: [&#123;"InternalId": "5_556"&#125;]. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("RemoveOleObjects", [[{"InternalId": "5_556"}]]);
```
