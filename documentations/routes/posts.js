// This is just an example to demonstrate how apidocjs works
// The entity post does not yet exist here on this app
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
  @api {get} /users/userId/posts/:id Detail
  @apiDescription Retrieve a post : entity `Post` does not exist on this app.
  This is for demonstration of how apidocjs works as seen in the navigation bar
  @apiName GetPost
  @apiGroup Posts
 
  @apiParam {string} id posts unique ID.
  @apiParam {string} userId users unique ID.
 
  @apiUse Success
 
  @apiUse Error
 */
