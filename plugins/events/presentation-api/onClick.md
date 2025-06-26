# onClick

The function called when the user clicks on the element.

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| isSelectionUse | boolean | Defines if the selection is used or not. |

```javascript
window.Asc.plugin.event_onClick = function(isSelectionUse) {
    window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function(obj) {
        window.Asc.plugin.currentContentControl = obj;
        var controlTag = obj ? obj.Tag : "";
        if (isSelectionUse)
            controlTag = "";
        ...
    });
};
```

