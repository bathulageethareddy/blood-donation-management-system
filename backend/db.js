const mysql = require('mysql2/promise');
const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bloodbank'
});

exports.getUserByEmail = async (email) => {
  const [rows] = await conn.execute('SELECT * FROM donors WHERE email = ?', [email]);
  return rows[0];
};

exports.getDonorById = async (id) => {
  const [rows] = await conn.execute('SELECT * FROM donors WHERE id = ?', [id]);
  return rows[0];
};

exports.updateDonorAvailability = async (id, available) => {
  await conn.execute('UPDATE donors SET available = ? WHERE id = ?', [available, id]);
  return available;
};

exports.registerDonor = async ({ name, email, password, phone, bloodType }) => {
  await conn.execute(
    'INSERT INTO donors (name, email, password, phone, bloodType) VALUES (?, ?, ?, ?, ?)',
    [name, email, password, phone, bloodType]
  );
};
