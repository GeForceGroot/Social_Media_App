const Sequelize = require('sequelize')
const { DataTypes } = require('sequelize')
const db = new Sequelize('socialmediadb', 'socialuser', 'socialpass', {
    host: 'localhost',
    dialect: 'mysql'
});

const COL_ID_DEF = {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_TITLE_DEF = {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
}

const COL_NAME_DEF = {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true
}

const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_NAME_DEF
})

const Posts = db.define('post', {
    userId: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },

})

const Comments = db.define('comments', {
    id: COL_ID_DEF,
    title: DataTypes.TEXT('tiny'),
    body: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

// Accosition (Define Relation)

Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Comments);
Comments.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);



module.exports = {
    db, Users, Posts, Comments
}