module.exports= function(sequelize, dataTypes){
    let alias = 'Donation';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            AutoIncrement: true,
            primaryKey: true
        },
        project_id: {
            type: dataTypes.INTEGER,
            NotNull: true,
        },
        donor_id: {
            type: dataTypes.INTEGER,
            NotNull: true,
        },
        amount:{
            type: dataTypes.DECIMAL,
            NotNull: true,
        }
    };

    let config = {
        TableName: 'donations',
        underscored: true,
    }

    const Donation = sequelize.define(alias, cols, config);
    return Donation;
}