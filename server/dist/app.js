"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4444;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
const server = app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
server.on('error', e => console.error("Error", e));
//# sourceMappingURL=app.js.map