module.exports= function(sequelize, dataTypes){
    let alias = 'Deposit';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            AutoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: dataTypes.INTEGER,
            NotNull: true,
        },
        amount: {
            type: dataTypes.DECIMAL,
            NotNull: true,
        },

    }

    let config = {
        TableName: 'deposits',
        timestamps: true,
        underscored: true
    }

    const Deposit = sequelize.define(alias, cols, config);
    return Deposit;
}