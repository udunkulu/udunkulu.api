/**
 * @apiDefine Success
 *
 * @apiSuccess {boolean} success The success of the response usually true
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
 * @apiError {boolean} success The success of the response usually false
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
  @api {get} /users/userId/music/:id Detail
  @apiDescription Retrieve a music
  @apiName GetMusic
  @apiGroup Music
 
  @apiParam {string} id music unique ID.
  @apiParam {string} userId users unique ID.
 
  @apiUse Success
 
  @apiUse Error
 */
