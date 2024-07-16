const axios = require('axios');
const { errNext } = require('../utils/error-handler');

const allTopProducts = async (req, res) => {
    try {
        const { company, topValue, minPrice, maxPrice } = req.query;
        const { categoryname } = req.params;
        const url = `http://20.244.56.144/test/companies/${company}/categories/${categoryname}/products?top=${topValue}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
        var bearerToken = 'YOUR_BEARER_TOKEN';
        const bearerResponse = await axios.post("http://20.244.56.144/test/auth", {
            companyName: "SASTRA University",
            clientID: "45e4748b-8876-4aaa-a92c-dd60962ff0cb",
            clientSecret: "dpYctIMDjzMuBkCv",
            ownerName: "Yugendran Sunder",
            ownerEmail: "125156141@sastra.ac.in",
            rollNo: "125156141"
        })
        bearerToken = bearerResponse.data.access_token;
        const response = await axios.get(url, {
            params: {
                top: topValue,
                minPrice,
                maxPrice,
            },
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        })

        res.json(response.data);

    } catch (err) {
        errNext(err, false, 'Data not recieved', res);
    };
}
module.exports = {
    allTopProducts,
};
