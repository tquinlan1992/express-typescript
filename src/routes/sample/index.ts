const response = require("./response.json");

function testRoute(req: any, res: any) {
    res.json(response);
}

export default testRoute;
