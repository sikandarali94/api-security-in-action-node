import { Sequelize, DataTypes, literal } from "sequelize";

const sequelize = new Sequelize('sqlite::memory:');

const Space = sequelize.define('Space', {
    name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        field: 'owner',
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, { tableName: 'spaces' });

const Messages = sequelize.define('Message', {
    author: {
        field: 'author',
        type: DataTypes.STRING(30),
        allowNull: false
    },
    msg_time: {
        field: 'msg_time',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: literal('CURRENT_TIMESTAMP')
    },
    msg_text: {
        field: 'msg_text',
        type: DataTypes.STRING(1024),
        allowNull: false
    }
});


