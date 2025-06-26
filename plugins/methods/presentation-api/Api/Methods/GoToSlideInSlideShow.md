# GoToSlideInSlideShow

Displays the slide with the specific index.

## Syntax

```javascript
expression.GoToSlideInSlideShow(nSlideIndex);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSlideIndex | Required | number |  | The slide index. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("GoToSlideInSlideShow", [2]);
```
