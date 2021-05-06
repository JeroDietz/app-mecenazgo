module.exports= function(sequelize, dataTypes){
    let alias = 'Project';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            AutoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: dataTypes.INTEGER,
            NotNull: true,
        },
        title: {
            type: dataTypes.STRING(100),
            NotNull: true,
        },
        sub_title: {
            type: dataTypes.STRING(100),
            NotNull: true,
        },
        description: {
            type: dataTypes.STRING(1000),
            NotNull: true,
        },
        amount: {
            type: dataTypes.DECIMAL,
            NotNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,
            NotNull: true,
        }
    };

    let config = {
        tableName : 'projects',
        timestamps: true,
        underscored: true,
        paranoid: true
    };

    const Project = sequelize.define(alias, cols, config);
    return Project;
}