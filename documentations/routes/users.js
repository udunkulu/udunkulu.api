/**
 * @apiDefine Success
 *
 * @apiSuccess {boolean} status The status of the response usually true
 * @apiSuccess {string} message This is the info about the request usually success
 * @apiSuccess {object} data This contains the resource (an object or
 * array of objects) and/or other required particulars
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200/201 OK
 *     {
 *       "status": true,
 *       "message": "success",
 *       "data": { ... } or [ {}, {}, ...]
 *     }
 */

/**
 * @apiDefine Error
 *
 * @apiError {boolean} status The status of the response usually false
 * @apiError {string} message This is the info about the request
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 xxx
 *     {
 *       "status": false,
 *       "message": "info about the error if any"
 *     }
 */

/**
 * @api {get} /users/:id Detail
 * @apiDescription Retrieve a user | shows user's detail
 * @apiName GetUser
 * @apiGroup Users
 *
 * @apiParam {Number} id Users unique ID.
 *
 *
 * @apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {get} /users List
 * @apiDescription Retrieve/List all users
 * @apiName ListUsers
 * @apiGroup Users
 *
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {post} /users Create
 * @apiDescription Create a user
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiParamExample {json} Request-Example: all are required
 *  {
        "email": "email address of the user.",
        "lastName": "lastName Lastname of the user",
        "password": "password address of the user",
        "firstName": "firstName of the user"
    }
 *
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {put} /users/:id Update
 * @apiDescription Update a user | updates user's detail or information
 * @apiName PutUser
 * @apiGroup Users
 *
 * @apiParam {String} id the user's id
 *
 * @apiParamExample {json} Request-Example: all or anyone of these
 *  {
        "email": "email address of the user.",
        "lastName": "lastName Lastname of the user",
        "firstName": "firstName of the user"
    }
 *
 * @apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {delete} /users/:id Delete
 * @apiDescription Delete a user
 * @apiDescription Delete a user
 * @apiName DeleteUser
 * @apiGroup Users
 *
 * @apiParam {String} id the user's id
 *
 * @apiUse Success
 *
 * @apiUse Error
 *
 */
