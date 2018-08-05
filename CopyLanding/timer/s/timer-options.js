(function() {
    var _id = "timer-options";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:260px;height:68px;'></div>");
    var _t = document.createElement("script");
    _t.src = "timer/timer/timer.min.js";
    var _f = function(_k) {
        var l = new MegaTimer(_id, {
            "view": [0, 1, 1, 1],
            "type": {
                "currentType": "2",
                "params": {
                    "startByFirst": true,
                    "days": "0",
                    "hours": "7",
                    "minutes": "18",
                    "utc": 0
                }
            },
            "design": {
                "type": "circle",
                "params": {
                    "width": "4",
                    "radius": "29",
                    "line": "solid",
                    "line-color": "#4a86e8",
                    "background": "opacity",
                    "direction": "direct",
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "30",
                    "number-font-color": "#ffffff",
                    "separator-margin": "14",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": false,
                    "text-font-family": {
                        "family": "Arial"
                    },
                    "text-font-size": "12",
                    "text-font-color": "red"
                }
            },
            "designId": 5,
            "theme": "white",
            "width": 268,
            "height": 68
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function() {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);