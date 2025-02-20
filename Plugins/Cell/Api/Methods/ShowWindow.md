# ShowWindow

Shows the plugin modal window.

## Syntax

```javascript
expression.ShowWindow(frameId, variation);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| frameId | Required | string |  | The frame ID. |
| variation | Required | variation |  | The plugin variation. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-xlsx
let variation = {
    url : location.href.replace(file, 'modal.html'),
    description : window.Asc.plugin.tr('Warning'),
    isVisual : true,
    isModal : true,
    EditorsSupport : ['word', 'cell', 'slide'],
    size : [350, 100],
    buttons : [
        {
            'text': window.Asc.plugin.tr('Yes'),
            'primary': true
        },
        {
            'text': window.Asc.plugin.tr('No'),
            'primary': false
        }
    ]
};
window.Asc.plugin.executeMethod ("ShowWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", variation]);
```
