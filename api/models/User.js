/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      loginName: {
          type: 'string',
          required: true
      },
      email: {
          type: 'string',
          email: true,
          required: true,
          unique: true
      },
      encryptedPassword: {
          type: 'string'
      }

  }
};

/*
1. поставить robomongo, mongodb
2. настроить sails для использования с mongodb
3, сездать модель и привязать ее к коллекции (можно привязать модель user)
4: написать контроллер который при помощи модели будет выбирать все записи
5: передать результат во view

сделать страницу со списком всех пользователей - нужно использовать метод find модели
*/