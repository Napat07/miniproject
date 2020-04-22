module.exports = {
  apps : [{
    name: 'pm2',
    script: 'index.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      PORT : 3000,
      NODE_ENV: 'development'
    },
    env_production: {
      PORT : process.env.PORT,
      NODE_ENV: 'production'
    }
  }],
};