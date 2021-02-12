/**
 * @apiDefine Success
 *
 * @apiSuccess {boolean} success The status of the response, usually true
 * @apiSuccess {string} message This is the info about the request usually success
 * @apiSuccess {object} data This contains the resource (an object or
 * array of objects) and/or other required particulars
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200/201 OK
 *     {
 *       "success": true,
 *       "message": "success",
 *       "data": { ... } or [ {}, {}, ...]
 *     }
 */

/**
 * @apiDefine Error
 *
 * @apiError {boolean} success The status of the response usually false
 * @apiError {string} message This is the info about the request
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 xxx
 *     {
 *       "success": false,
 *       "message": "info about the error if any"
 *     }
 */

/**
 * @api {get} /artists/id Detail
 * @apiDescription Retrieves an artist and shows infomation about the artist
 * @apiName GetArtist
 * @apiGroup Artists
 *
 * @apiParam (String) id Album unique ID.
 *
 * @apiUse Header
 *
 * @apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {get} /artists list
 * @apiDescription Retrieves all available artist in the data base and shows their details
 * @apiName ListArtist
 * @apiGroup Artists
 *
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {post} /artists Create
 * @apiDescription Creates an artist
 * @apiName CreateArtist
 * @apiGroup Artists
 *
 * @apiParamExample {json} Request-Example: only userId and stageName
 * {
        "email": "email address of the aritst.",
        "lastName": "lastName Lastname of the artist",
        "password": "password address of the artist",
        "firstName": "firstName of the artist",
        "role": "artist",
        "stageName": "artist stage name"
 * }
 *
 * @apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {put} /artists/id Update
 * @apiDescription Update a artist | updates Artist's detail or information
 * @apiName PutArtist
 * @apiGroup Artists
 *
 * @apiParam {String} id the artist's id
 *
 * @apiParamExample {json} Request-Example: all or anyone of these fields
 * {
 *    "userId": "userId",
 *    "firstName": "artist's first name",
 *    "lastName": "artist's last name",
 *    "stageName": "artist's stage name",
 *    "avatar": "The profile picture of an artist",
 *    "phoneNumber": "artist's phone number",
 *    "password": "artist password"
 * }
 *
 * @apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {delete} /artists/id Delete
 * @apiDescription Deletes an artist
 * @apiName DeleteArtist
 * @apiGroup Artists
 *
 * @apiParam {String} id the artist's id
 *
 * @apiUSe Success
 *
 @apiUse Error
 */
