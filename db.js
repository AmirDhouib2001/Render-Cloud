const { Sequelize } = require('sequelize');
require('dotenv').config(); // Charger les variables d'environnement

// Base de données
const sequelize = new Sequelize(
  process.env.DATABASE_URL, // URL de connexion à la base de données
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },  
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    },
  },
);

sequelize.authenticate()
  .then(() => console.log('Connexion réussie à la base de données.'))
  .catch(err => console.error('Erreur de connexion :', err));

sequelize.sync();

module.exports = sequelize;
