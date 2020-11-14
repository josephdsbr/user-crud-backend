import bcrypt from 'bcrypt';

const salt = 10;

const CryptPassword = (password: string ) => bcrypt.hash(password, salt);
const ComparePassword = (hashedPassword: string, password: string) => bcrypt.compare(password, hashedPassword);

export { CryptPassword, ComparePassword };