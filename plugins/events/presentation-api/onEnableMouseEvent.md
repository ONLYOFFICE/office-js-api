# onEnableMouseEvent

The function called to turn the mouse or touchpad events on/off.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| isEnabled | boolean | Defines if the mouse or touchpad is enabled (**true**) or not (**false**). |

```javascript
window.Asc.plugin.onEnableMouseEvent = function(isEnabled) {
    var _frames = document.getElementsByTagName("iframe");
    if (_frames && _frames[0]) {
        _frames[0].style.pointerEvents = isEnabled ? "none" : "";
    }
};
```

