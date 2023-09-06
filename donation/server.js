import express from "express";
import proxy from "express-http-proxy";
import path from "path";
import url from 'url';

/*
Purpose of this server is to serve the frontend that is built into the dist folder
It also proxies api requests to the backend 
*/

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

app.use('/api', proxy('https://donation-api-v2.onrender.com', {
    proxyReqPathResolver: (req) => {
        return '/api' + req.url;
    }
}));

app.use(express.static('dist'));
app.use('*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});