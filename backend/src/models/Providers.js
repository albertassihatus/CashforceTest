module.exports = (sequelize, DataTypes) => {
    const Providers = sequelize.define('Providers', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tradingName: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, 
    {
      timestamps: false,
      underscored: false, 
      tableName: 'providers',
    });
  
    return Providers;
  };