# RemoveComments

Removes the specified comments.

## Syntax

```javascript
expression.RemoveComments(arrIds);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrIds | Required | string[] |  | An array which contains the IDs of the specified comments. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("RemoveComments", [["1_631", "1_632"]]);
```
