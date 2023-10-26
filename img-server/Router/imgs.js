const axios = require('axios').default;
const cheerio = require('cheerio');


module.exports.getImgs = async function (size = 1) {
    let url = `https://www.dbbqb.com/api/group?size=${size}`
    console.log(url);
    const res = await axios.get(url);
    //&start=${start}
    for (let i = 0; i < res.data.length; i++) {
        for (let j = 0; j <= res.data[i].details.length - 1; j++) {
            res.data[i].details[j].path = `https://image.dbbqb.com/${res.data[i].details[j].path}`
        }
    }
    return res.data
}