# onInputHelperClear

The function called when the user is trying to clear the text and the input helper disappears.

This event has no parameters.

```javascript
window.Asc.plugin.event_onInputHelperClear = function() {
    window.Asc.plugin.currentText = "";
    window.Asc.plugin.getInputHelper().unShow();
};
```

