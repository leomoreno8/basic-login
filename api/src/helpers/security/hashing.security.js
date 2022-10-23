const bcrypt = require ("bcryptjs");

class Hashing {
  static async hash(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  static async compare(password, hash) {
    return bcrypt.compare(password, hash);
  }
}

module.exports = Hashing;