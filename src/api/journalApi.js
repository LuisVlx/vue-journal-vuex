
import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-3f4ea-default-rtdb.firebaseio.com'
})

export default journalApi