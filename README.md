# sdk-rajaongkir
sdk-rajaongkir merupakan sebuah alat yang mempermudah kita untuk melakukan request ke **API** rajaongkir
#### Installasi
```bash
npm install sdk-rajaongkir
```
##### cek resi
```javascript
import {Resi} from 'sdk-rajaongkir'

async function getData(){
    const req = await Resi(URL, API_KEY, NOMOR_RESI, KURIR)
    console.log(res)
}
```