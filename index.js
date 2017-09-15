var express = require('express');
var app = express();
app.use(express.static('www'));

app.get('/getPhoto', (req, rep) => {
    var g = {
        pic: [
            [
                "Public/myui_v1/images/manage/ProjectItem01.jpg",
                "Public/myui_v1/images/manage/ProjectItem02.jpg",
                "Public/myui_v1/images/manage/ProjectItem03.jpg",
                "Public/myui_v1/images/manage/ProjectItem04.jpg",
                "Public/myui_v1/images/manage/ProjectItem05.jpg",
                "Public/myui_v1/images/manage/ProjectItem06.jpg",
                "Public/myui_v1/images/manage/ProjectItem07.jpg",
                "Public/myui_v1/images/manage/ProjectItem08.jpg",
                "Public/myui_v1/images/manage/ProjectItem09.jpg",
                "Public/myui_v1/images/manage/ProjectItem10.jpg"
            ]
        ],
        name: ["康桥林溪湾实景展示"]
    }
    g = JSON.stringify(g);
    // console.log(g);
    rep.send(g);
})


app.listen('3000', function () {
    console.log('running......');
})