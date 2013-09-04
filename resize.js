var screenMessage =  function(response) {
    var sizes = {
      feature: [319, 500],
      smart: [500, 500],
      tablet: [640, 500]
    }
    var group = response.group;
    var size = sizes[response.group];
    var windowWidth = size[0];
    var windowHeight = size[1];
    var xPos = (screen.width/2) - (windowWidth/2);
    var yPos = (screen.height/2) - (windowHeight/2);
    if ((screen.width + 1) > windowWidth){
        window.open(location.href,
            "POPUP",
            "width="+ windowWidth+",height="+windowHeight +",left="+xPos+",top="+yPos);
    }
};

chrome.runtime.sendMessage({storage: "group"}, screenMessage );