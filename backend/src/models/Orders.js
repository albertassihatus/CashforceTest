module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {

    nNf: {
            type: DataTypes.INTEGER,
            allowNull: false,
    },

    emissionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }, 

    value: {
          type: DataTypes.INTEGER,
          allowNull: false,
    }, 

    orderStatusBuyer: {
          type: DataTypes.INTEGER,
          allowNull: false,
    }
    }, 
    {
      timestamps: false,
      underscored: false, 
      tableName: 'orders'
    },
    );

    Orders.associate = (models) => {
        Orders.belongsTo(models.Cnpjs, {
            foreignKey: 'cnpjId', as: 'cnpj',
            underscored: true,
        }),
        Orders.belongsTo(models.User, {
            foreignKey: 'userId', as: 'user',
            underscored: true,
        }),
        Orders.belongsTo(models.Buyers, {
            foreignKey: 'buyerId', as: 'buyer',
            underscored: true,
        }),
        Orders.belongsTo(models.Providers, {
            foreignKey: 'providerId', as: 'provider',
            underscored: true,
        })
      };

    return Orders;
  };