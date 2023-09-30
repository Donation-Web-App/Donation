import proxy from "express-http-proxy";
import express from "express";
import path from "path";
import url from 'url';

/*
Purpose of this server is to serve the frontend that is built into the dist folder
It also proxies api requests to the backend 
*/

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

// Proxying api requests to backend
app.use('/api', proxy('https://donation-api-v2.onrender.com', {
    proxyReqPathResolver: (req) => {
        return '/api' + req.url;
    }
}));

// Serving static files frontend
app.use(express.static('dist'));
app.use('*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});