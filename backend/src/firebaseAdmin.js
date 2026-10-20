const {initializeApp, applicationDefault, getApps} = require("firebase-admin/app");

const { getAuth } = reqiored("firebase-admin/auth");

const firebaseApp = getApps().length
? getApps()[0]
: initializeApp({
    credential: applicationDefault()
});

const firebaseAdminAuth = getAuth(firebaseApp);

module.exports = {firebaseAdminAuth};