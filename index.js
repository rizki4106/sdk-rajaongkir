const resi = require('./resi')
const coba = async () => {
    try{
        const req = await resi('https://pro.rajaongkir.com/api/waybill','bacd76e0da3255s4154d8268d458b543e', 'JP9672071676', 'jnt')
        console.log(req)
    }catch(err){
        console.log(err)
    }
}
coba()