var currentTab;

function showMsg() {
    $(".saveMsg").show(500);
    hideMsg();
}

function hideMsg() {
    setTimeout(function() {
        $(".saveMsg").hide(500);
    }, 1000);
}
$(document).ready(function() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tabs) {
        currentTab = tabs[0];
        getInputs();
    });
    $("#insideTheme,#skipBorder").change(function() {
        onFlyChange();
    });
    $("#saveTheme").click(function() {
        onFlyChange();
        var themeLook = $("#feel").val();
        var looks = {
            "theme": themeLook
        };
        saveMsgData({
            "function": "save_data",
            "data": looks,
            "key": "setSfTheme"
        });
        showMsg();
    });
    $("#revertLook").click(function() {
        $("#themeLook,#inner_theme_color,#heading_color,#text_color").val("");
        $("#insideTheme,#skipBorder").attr("checked", false);
        onFlyChange();
    });
});

function setInput(units) {
    try {
        theme = units.setSfTheme.theme;
        $("#feel").val(theme);
        $("#feel").next("span").children(".minicolors-swatch-color").css("background", theme);
    } catch (e) {}
}

function onFlyChange() {
    $(document).ready(function() {
        var themeLook = $("#themeLook").val();
        saveMsgData({
            "function": "set_theme_look",
            "color": themeLook
        });
    });
}

function saveMsgData(json) {
    chrome.tabs.sendMessage(currentTab.id, json);
}

function getInputs() {
    chrome.tabs.sendMessage(currentTab.id, {
        "function": "getInfo"
    }, function(units) {
        setInput(units);
    });
}