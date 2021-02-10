/**
 * @apiDefine Success
 *
 * @apiSuccess {boolean} success The success of the response usually is true
 * @apiSuccess {string} message This is the info about the request, it is usually success
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
  * @apiError {boolean} success The success of this response is usually false
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
 * @api {get} /artists/artistId/albums/id Detail
 * @apiDescription Retrieves an album or rather shows the details of an album
 * @apiName GetAlbum
 * @apiGroup Albums
 *
 * @apiParam {String} id Album unique ID.
 * @apiParam {String} artistId artist unique ID
 *
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {get} /artists/artistId/albums List
 * @apiDescription Retrieves all the albums or rather shows all the details of available albums
 * @apiName ListAlbum
 * @apiGroup Albums
 * @apiParam {String} artistId artist unique ID
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {post} /artists/artistId/albums Create
 * @apiDescription Creates an album
 * @apiName CreateAlbum
 * @apiGroup Albums
 *
 * @apiParamExample {json} Request-Example: all field are required and are form-data
 *{
    "title": "album title",
    "released": year-month-day,
    "albumCoverArt": FORM_DATA
  }
 *
 *@apiUse Header
 *
 *@apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {delete} /artists/artistId/albums/id Delete
 * @apiDescription Deletes an album
 * @apiName DeleteAlbum
 * @apiGroup Albums
 *
 * @apiParam {String} id the album's id
 * @apiParam {String} artistId the artist's id
 *
 * @apiUSe Success
 *
 * @apiUse Error
 */

/**
 * @api {put} /artists/artistId/albums/id Update
 * @apiDescription Update a album | updates Album's detail or information
 * @apiName PutAlbum
 * @apiGroup Albums
 *
 * @apiParam {String} id the album's id
 * @apiParam {String} artistId the artists id
 *
 * @apiUse Header
 *
 * @apiParamExample {json} Request-Example: any of these files below are required
 *  {
    "title": "album title",
    "description": "album description"
    }
 *
 * @apiUse Success
 *
 * @apiUse Error
 */
