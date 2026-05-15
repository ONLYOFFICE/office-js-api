window.Asc.plugin.executeMethod ("OnDropEvent", [{
  "type": "onbeforedrop",
  "x" : pos.x,
  "y" : pos.y
}]);

window.Asc.plugin.executeMethod ("OnDropEvent", [{
  "type": "ondrop",
  "x" : pos.x,
  "y" : pos.y,
  "text" : "test text",
  "html" : "<span>test html</span>"
}]);