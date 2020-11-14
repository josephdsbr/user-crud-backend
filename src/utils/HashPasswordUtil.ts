import bcrypt from 'bcrypt';

const salt = 10;

const CryptPassword = (password: string ): string => bcrypt.hashSync(password, salt);
const ComparePassword = (hashedPassword: string, password: string): boolean => bcrypt.compareSync(hashedPassword, password);

export { CryptPassword, ComparePassword };