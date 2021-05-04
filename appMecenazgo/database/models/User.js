module.exports= function(sequelize, dataTypes){
    let alias = 'User';
    let cols = {
        id: {
            type : dataTypes.INTERGER,
            autoIncrement: true,
            primaryKey : true,
        },
        name: {
            type: dataTypes.STRING(100),
            NotNull: true,
        },
        first_name: {
            type: dataTypes.STRING(100),
            NotNull: true,
        },
        last_name: {
            type: dataTypes.STRING(100),
            NotNull: true,
        },
        identification_number: {
            type: dataTypes.DECIMAL,
            NotNull: true,
        },
        avatar: {
            type: dataTypes.STRING(100),
            NotNull: true,
        },
        email: {
            type: dataTypes.STRING(100),
            NotNull: true,
        },
        password: {
            type: dataTypes.STRING(100),
            NotNull: true,
        },
        amount: {
            type: dataTypes.DECIMAL,
            NotNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,

        }
    };

    let config= {
        tableName : 'users',
        timestamps: true,
        underscored: true,
        paranoid: true,
    };
}