module.exports= function(sequelize, dataTypes){
    let alias = 'Donation';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            AutoIncrement: true,
            PrimaryKey: true
        },
        project_id: {
            type: dataTypes.INTERGER,
            NotNull: true,
        },
        donor_id: {
            type: dataTypes.INTERGER,
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