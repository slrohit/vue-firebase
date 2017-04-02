import config from '../configs/FirebaseConfig'
import Firebase from 'firebase'

let firebase = Firebase.initializeApp(config)
let db = firebase.database()

export default db
