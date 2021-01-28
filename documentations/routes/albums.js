/**
 * @apiDefine Success
 *
 * @apiSuccess {boolean} success The success of the responce usually is true
 * @apiSuccess {string} message This is the info about the request usually success
 * @apiSuccess {object} data This contains the resource (an object or
 * array of objects) and/or other required particulars
 *
 *
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200/201 OK
 * {
 *    "success": true,
 *    "message": "success",
 *    "data": {...} or [{}, {}, ...]
 * }
 */

/**
  * @apiDefine Error
  *
  * @apiError {boolean} success The success of this responce is usually false
  * @apiError {string} message This is the info about the request
  *
  * @apiErrorExample {json} Error-Response:
  * HTTP/1.1 xxx
  * {
  *   "success": false,
  *   "message": "info about the error if any"
  * }
  */

/**
 * @api {get} /albums/:id Detail
 * @apiDescription Retrieves an album or rather shows the details of an album
 * @apiName GetAlbum
 * @apiGroup Albums
 *
 * @apiParam (String) id Album unique ID.
 *
 * @apiUse Header
 *
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {get} /albums List
 * @apiDescription Retrieves all the albums or rather shows all the details of available albums
 * @apiName ListAlbum
 * @apiGroup Albums
 *
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {post} /albums Create
 * @apiDescription Creates an album
 * @apiName CreateAlbum
 * @apiGroup Albums
 *
 * @apiParamExample {json} Request-Example: only artist and title fields are required
 *{
    "title": "album title",
    "artist": "artists name",
    "discription": "album discription"
  }
 *
 *@apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {delete} /albums/id Delete
 * @apiDescription Deletes an album
 * @apiName DeleteAlbum
 * @apiGroup Albums
 *
 * @apiParam {String} id the album's id
 *
 * @apiUSe Success
 *
 @apiUse Error
 */

/**
 * @api {put} /albums/id Update
 * @apiDescription Update a album | updates Album's detail or information
 * @apiName PutAlbum
 * @apiGroup Albums
 *
 * @apiParam {String} id the album's id
 *
 * @apiParamExample {json} Request-Example: all or anyone of these fields
 *  {
        "email": "email address of the album.",
        "lastName": "lastName Lastname of the album",
        "firstName": "firstName of the album"
    }
 *
 * @apiUse Success
 *
 * @apiUse Error
 */
