const axios = require('axios').default;
const express = require('express');
let router = express.Router();

const {
    addImg
} = require('../Service/imgsService');



let imgArr = []
const getImgs = async function (size = 300) {
    let url = `https://www.dbbqb.com/api/group?size=${size}`
    console.log(url);
    const res = await axios.get(url);
    //&start=${start}
    for (let i = 0; i < res.data.length; i++) {
        for (let j = 0; j <= res.data[i].details.length - 1; j++) {
            res.data[i].details[j].path = `https://image.dbbqb.com/${res.data[i].details[j].path}`
            imgArr.push(res.data[i].details[j])
        }
    }
}
getImgs()




router.post('/', async function (req, res, next) {
    res.send(await addImg(req.body));
})
router.get('/', function (req, res) {
    res.send("gett")
})

module.exports = router;