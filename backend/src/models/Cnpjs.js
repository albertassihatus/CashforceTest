module.exports = (sequelize, DataTypes) => {
    const Cnpjs = sequelize.define('Cnpjs', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      cnpj: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      companyType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, 
    {
      timestamps: false,
      underscored: false, 
      tableName: 'cnpjs'
    },
    );

    // Cnpjs.associate = (models) => {
    //   Cnpjs.hasMany(models.Orders, {
    //     as: 'cnpjs',
    //     foreignKey: 'cnpjid',
    //   })
    // }
  
    return Cnpjs;
  };