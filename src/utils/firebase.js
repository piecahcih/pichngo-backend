import admin from 'firebase-admin'
import {createRequire} from 'module'

const require = createRequire(import.meta.url)
let serviceAccount;

if(process.env.FIREBASE_SERVICE_ACCOUNT){
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
  serviceAccount = require('../../serviceAccountKey.json')
}

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key?.replace(/\\n/g, '\n'),
  })
})

export default admin