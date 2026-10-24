module.exports = {
  apps: [
    {
      name: "brl-tat-backend",
      cwd: "/var/www/brl-tat/brl_tat_portal/server",
      script: "dist/main.js",
      env: {
        NODE_ENV: "production",
        PORT: 4010
      }
    },
    {
      name: "brl-tat-frontend",
      cwd: "/var/www/brl-tat/brl_tat_portal/client",
      script: "production-server.cjs",
      env: {
        FRONTEND_PORT: 3010,
        BACKEND_URL: "http://localhost:4010"
      }
    }
  ]
};
