/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n// router.get('/api/hello', (req, res, next) => {\n//     res.json('World');\n// });\n// router.get('/', async (req, res) => {\n//     try {\n//         let sessions = await DB.sessions.all();\n//         res.json(sessions);\n//     } catch(e) {\n//         console.log(e);\n//         res.sendStatus(500);\n//     }\n// })\n// router.get('/sessions/:id', async (req, res) => {\n//     try {\n//         let sessions = await DB.session.one(parseInt(req.params.id, 10));\n//         res.json(sessions[0]);\n//     } catch(e) {\n//         console.log(e);\n//         res.sendStatus(500);\n//     }\n// })\n// router.post('/sessions', async (req, res) => {\n//     let name = req.body.name;\n//     let description = req.body.description;\n//     let displayType = parseInt(req.body.authorid, 10);\n//     let id = parseInt(req.body.tagid, 10)\n//     try {\n//         let sessions = await DB.Sessions.post(name, description, displayType, id);\n//         res.json(sessions);\n//     } catch(e) {\n//         console.log(e);\n//         res.sendStatus(500);\n//     }\n// })\n// router.put('/sessions/:id?', async (req, res) => {\n//     let id = parseInt(req.params.id, 10);\n//     let name = req.body.name;\n//     let description = req.body.description;\n//     let displayType = parseInt(req.body.authorid, 10);\n//     try {\n//         let sessions = await DB.Sessions.put(id, name, description, dislayType);\n//         res.json(sessions);\n//     } catch(e) {\n//         console.log(e);\n//         res.sendStatus(500);\n//     }\n// })\n// router.delete('/sessions/:id?', async (req, res) => {\n//     let id = parseInt(req.params.id, 10);\n//     try {\n//         let sessions = await DB.Sessions.del(id);\n//         res.json(sessions);\n//     } catch(e) {\n//         console.log(e);\n//         res.sendStatus(500);\n//     }\n// })\n// router.get('/ideas', async (req, res) => {\n//     try {\n//         let ideas = await DB.Ideas.tAll();\n//         res.json(ideas);\n//     } catch(e) {\n//         console.log(e);\n//         res.sendStatus(500);\n//     }\n// })\n// router.get('/ideas/:id', async (req, res) => {\n//     try {\n//         let ideas = await DB.Ideas.tOne(parseInt(req.params.id, 10));\n//         res.json(ideas);\n//     } catch(e) {\n//         console.log(e);\n//         res.sendStatus(500);\n//     }\n// })\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar app = express();\napp.use(express.json());\napp.use(express.static('public'));\napp.use(routes_1.default);\napp.get('*', function (req, res) {\n    res.sendFile(path.join(__dirname, '../public', 'index.html'));\n});\n// app.get([\"/\",\"/Forms\",\"/Session/:id/admin\",\"/Session/:id/details\"], (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')))\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });