# UnShowInputHelper

Unshows the input helper.

## Syntax

```javascript
expression.UnShowInputHelper(guid, isclear);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | Required | string |  | A string value which specifies a plugin identifier which must be of the *asc.&#123;UUID&#125;* type. |
| isclear | Required | string |  | Defines if the input context will be cleared (**true**) or not (**false**). |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("UnShowInputHelper", ["asc.{UUID}", true]);
```
