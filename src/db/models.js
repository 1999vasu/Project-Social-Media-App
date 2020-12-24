const Sequelize = require("sequelize")
const DataTypes = Sequelize.DataTypes 

const db = new Sequelize({
    dialect: 'mysql',
    database: 'socialmediadb',
    username: 'socialuser',
    password: 'socialpass'
})

const COL_ID_DEF = {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_USERNAME_DEF = {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
}

const COL_TITLE_DEF = {
    type: DataTypes.STRING(150),
    allowNull: false
}

const COL_BODY_DEF = {
    type: DataTypes.TEXT,
    allowNull: false
}

const Users = db.define('user',{
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
    
})

const Posts = db.define('post',{
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }

})

const Comments = db.define('comment',{
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: DataTypes.TEXT('tiny'),
        allowNull: false
    }

})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Comments.belongsTo(Posts)
Posts.hasMany(Comments)





module.exports = {
    db,
    Users,
    Posts,
    Comments
}

