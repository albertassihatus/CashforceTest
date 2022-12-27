module.exports = (sequelize, DataTypes) => {
    const Buyers = sequelize.define('Buyers', {
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
      tableName: 'buyers',
    });
  
    return Buyers;
  };