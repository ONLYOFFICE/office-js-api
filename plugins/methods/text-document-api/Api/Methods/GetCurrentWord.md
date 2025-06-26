# GetCurrentWord

Returns the current word.

## Syntax

```javascript
expression.GetCurrentWord(type);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Optional | [TextPartType](../../Enumeration/TextPartType.md) | "entirely" | Specifies if the whole word or only its part will be returned. |

## Returns

string

## Example

```javascript
window.Asc.plugin.executeMethod ("GetCurrentWord", ["entirely"], function (res) {
    console.log (res)
});
```
