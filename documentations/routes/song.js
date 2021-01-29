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
 * @apiDefine Header Header
 * @apiHeader {String} token Token value.
 *
 */

/**
 * @api {post} /songs Upload
 * @apiDescription Upload a song
 *
 * The form should be sent as multipart/form-data
 * The particular input field that file should be attached to should be in this form
 *
 * < input name="_song" type="file"  / >
 *
 * @apiName UploadSong
 * @apiGroup Songs
 *
 * @apiParamExample {json} Request-Example: all the fields are required for now
 * {
 *    "title": "song title",
 *    "artist": "artists name",
 *    "album": "album name",
 *    "mood": "possible moods"
 * }
 *
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {get} /songs/id Play
 * @apiDescription Play a song
 * @apiName PlaySong
 * @apiGroup Songs
 *
 * @apiParam {String} id the song's id
 *
 * @apiUse Success
 *
 * @apiUse Error
 */
