const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionsController = require("./controllers/SessionController");

const routes = express.Router();

//login
routes.post("/sessions", SessionsController.create);

//listing ONGS
routes.get("/ongs", OngController.index);
//registration of ONGS
routes.post("/ongs", OngController.create);
//registratio of incidents

//listing specific incident
routes.get("/profile", ProfileController.index);

//listing incidents
routes.get("/incidents", IncidentController.index);
//registration of incidents
routes.post("/incidents", IncidentController.create);
//delete of incidents
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
