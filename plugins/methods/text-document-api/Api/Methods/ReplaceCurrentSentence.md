# ReplaceCurrentSentence

Replaces the current sentence with the specified string.

## Syntax

```javascript
expression.ReplaceCurrentSentence(replaceString, type);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| replaceString | Required | string |  | Replacement string. |
| type | Optional | [TextPartType](../../Enumeration/TextPartType.md) | "entirely" | Specifies if the whole sentence or only its part will be replaced. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("ReplaceCurrentSentence", ["ONLYOFFICE", "entirely"]);
```
