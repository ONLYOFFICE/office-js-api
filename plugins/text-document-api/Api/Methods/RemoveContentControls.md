# RemoveContentControls

Removes several content controls.

## Syntax

```javascript
expression.RemoveContentControls(arrDocuments);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrDocuments | Required | [ContentControl](../../Enumeration/ContentControl.md)[] |  | An array of content control internal IDs. Example: [&#123;"InternalId": "5_556"&#125;]. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("RemoveContentControls", [[{"InternalId": "5_556"}]]);
```
