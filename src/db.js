import firebase from '@/firebase'
import '@firebase/firestore'

const firestore = firebase.firestore()
const settings = {}
firestore.settings(settings)

export default firestore
