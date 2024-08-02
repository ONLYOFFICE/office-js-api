window.buttonIDChangeState_click = undefined;
if (null == returnValue) {
    window.Asc.plugin.executeMethod ("AddContentControl", [1, {"Id" : 7, "Lock" : 0, "Tag" : "{some text}"}]);
}
else {
    window.Asc.plugin.executeMethod ("RemoveContentControl", [returnValue]);
}