module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      departament: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      cashforceAdm: DataTypes.BOOLEAN,
    }, 
    {
      timestamps: false,
      underscored: false, 
      tableName: 'users'
    });

    User.associate = (models) => {
      User.hasMany(models.Orders, {
        as: 'users',
        foreignKey: 'userId',
      })
    }
  
    return User;
  };
