export default {
    dialect: 'postgres',
    host: '127.0.0.1',
    username: 'postgres',
    password: 'docker',
    database: 'santa',
    define: {
        timestamps: true,
        underscored: true
    }
};