const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const serviceAccount = require('../config/firebase-admin-key.json'); // chemin vers ta clé privée

// Initialise Firebase Admin SDK avec la clé privée
initializeApp({
  credential: cert(serviceAccount),
});

// Fonction d'attribution de rôle
async function assignRole(uid, role) {
  try {
    await getAuth().setCustomUserClaims(uid, { role });
    console.log(`✅ Rôle "${role}" attribué à l'utilisateur avec l'UID : ${uid}`);
  } catch (error) {
    console.error('❌ Erreur lors de l’attribution du rôle :', error);
  }
}

// Remplace ces UID par ceux trouvés dans Firebase > Authentication
assignRole('ZtN1aljmTrVq0YJwru1dUcNTdbZ2', 'admin');
assignRole('ZtN1aljmTrVq0YJwru1dUcNTdbZ2', 'client');
