// import cloudinary from 'cloudinary'

import uploadImage from "@/modules/daybook/helpers/uploadImage";
import axios from 'axios'

// cloudinary.config({
//     cloud_name: 'djfvmhp74',
//     api_key: '281171894576559',
//     api_secret: '8g7bQU0DzW95mIlFA423HSb58r4'
// })

describe('Pruebas en el uploadImage', () => {

    test('debe de cargar un archivo y retornar el url ', async() => {
        
        const { data } = await axios.get('https://res.cloudinary.com/djfvmhp74/image/upload/v1677694260/728334_hgktv1.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'caramelos.jpg')

        const url = await uploadImage(file)

        expect(typeof url).toBe('string')

        // Tomar el ID
        // const segments = url.split('/')
        // const imageId = segments[ segments.length - 1 ].replace('.jpg','')
        // cloudinary.v2.api.delete_resources( imageId, {}, () => {
        //     done()
        // })

    });

})