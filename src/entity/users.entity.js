
import { EntitySchema } from '@mikro-orm/core';

class UserEntity{
  /**
   * @param {string} name
   * @param {string} email
   * @param {string} password
   */
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export const schema = new EntitySchema({
  class: UserEntity,
  properties: {
    name: { type: 'string' },
    email: { type: 'string', unique: false },
    password: { type: 'string', nullable: false },
  },
});

export default UserEntity;