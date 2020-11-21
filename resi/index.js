const axios = require('axios')
const resi = (url = '', apikey = '', resi = '', kurir = '') => {
    return new Promise(async (resolve, reject) => {
        try{
            // set the data
            const data = {
                waybill: resi,
                courier: kurir
            }
            
            // start request
            const req = await axios.post(url, data, {
                headers: {
                    key: apikey
                }
            })

            // return the result
            resolve(JSON.stringify({
                status: req.status,
                headers: req.headers,
                data: req.data
            }))

        }catch(err){
            reject(JSON.stringify({
                status: err.response.status,
                message: err.response.data
            }))
        }
    })
}
module.exports = resi