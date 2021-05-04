module.exports= function(sequelize, dataTypes){
    let alias = 'Deposit';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            AutoIncrement: true,
            PrimaryKey: true,
        },
        user_id: {
            type: dataTypes.INTERGER,
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
}