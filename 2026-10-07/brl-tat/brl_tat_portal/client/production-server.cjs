const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();
const PORT = process.env.FRONTEND_PORT || 3010;

// Forward /api requests to the production backend
app.use(
  createProxyMiddleware({
    pathFilter: "/api",
    target: process.env.BACKEND_URL || "http://localhost:4010",
    changeOrigin: true,
  }),
);

// Serve the production React build
app.use(express.static(path.join(__dirname, "dist")));
// add client if you want to run in brl root path 'client'

// React Router fallback
app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
    // add client if you want to run in brl root path 'client'
  } else {
    next();
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Production frontend running on http://localhost:${PORT}`);
  // console.log(`Production frontend listening on http://192.168.0.120:${PORT}`);

});
