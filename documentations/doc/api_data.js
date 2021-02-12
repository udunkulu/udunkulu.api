define({ "api": [
  {
    "type": "post",
    "url": "/artists/artistId/albums",
    "title": "Create",
    "description": "<p>Creates an album</p>",
    "name": "CreateAlbum",
    "group": "Albums",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example: all field are required and are form-data",
          "content": "{\n    \"title\": \"album title\",\n    \"released\": year-month-day,\n    \"albumCoverArt\": FORM_DATA\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/albums.js",
    "groupTitle": "Albums",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/artists/artistId/albums/id",
    "title": "Delete",
    "description": "<p>Deletes an album</p>",
    "name": "DeleteAlbum",
    "group": "Albums",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the album's id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>the artist's id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/albums.js",
    "groupTitle": "Albums",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/artists/artistId/albums/id",
    "title": "Detail",
    "description": "<p>Retrieves an album or rather shows the details of an album</p>",
    "name": "GetAlbum",
    "group": "Albums",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Album unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>artist unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/albums.js",
    "groupTitle": "Albums",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/artists/artistId/albums",
    "title": "List",
    "description": "<p>Retrieves all the albums or rather shows all the details of available albums</p>",
    "name": "ListAlbum",
    "group": "Albums",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>artist unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/albums.js",
    "groupTitle": "Albums",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/artists/artistId/albums/id",
    "title": "Update",
    "description": "<p>Update a album | updates Album's detail or information</p>",
    "name": "PutAlbum",
    "group": "Albums",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the album's id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>the artists id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: any of these files below are required",
          "content": "{\n   \"title\": \"album title\",\n   \"description\": \"album description\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/albums.js",
    "groupTitle": "Albums",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/artists",
    "title": "Create",
    "description": "<p>Creates an artist</p>",
    "name": "CreateArtist",
    "group": "Artists",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example: only userId and stageName",
          "content": "{\n        \"email\": \"email address of the aritst.\",\n        \"lastName\": \"lastName Lastname of the artist\",\n        \"password\": \"password address of the artist\",\n        \"firstName\": \"firstName of the artist\",\n        \"role\": \"artist\",\n        \"stageName\": \"artist stage name\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/artist.js",
    "groupTitle": "Artists",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/artists/id",
    "title": "Delete",
    "description": "<p>Deletes an artist</p>",
    "name": "DeleteArtist",
    "group": "Artists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the artist's id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/artist.js",
    "groupTitle": "Artists",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/artists/id",
    "title": "Detail",
    "description": "<p>Retrieves an artist and shows infomation about the artist</p>",
    "name": "GetArtist",
    "group": "Artists",
    "parameter": {
      "fields": {
        "String": [
          {
            "group": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Album unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/artist.js",
    "groupTitle": "Artists",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/artists",
    "title": "list",
    "description": "<p>Retrieves all available artist in the data base and shows their details</p>",
    "name": "ListArtist",
    "group": "Artists",
    "version": "0.0.0",
    "filename": "documentations/routes/artist.js",
    "groupTitle": "Artists",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/artists/id",
    "title": "Update",
    "description": "<p>Update a artist | updates Artist's detail or information</p>",
    "name": "PutArtist",
    "group": "Artists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the artist's id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: all or anyone of these fields",
          "content": "{\n   \"userId\": \"userId\",\n   \"firstName\": \"artist's first name\",\n   \"lastName\": \"artist's last name\",\n   \"stageName\": \"artist's stage name\",\n   \"avatar\": \"The profile picture of an artist\",\n   \"phoneNumber\": \"artist's phone number\",\n   \"password\": \"artist password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/artist.js",
    "groupTitle": "Artists",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/artists/artistId/albums/albumId/songs/id",
    "title": "Delete",
    "description": "<p>Deletes a song</p>",
    "name": "DeleteSongs",
    "group": "Songs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the song unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>album unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>artist unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/artists/artistId/albums/albumId/songs/id",
    "title": "Detail",
    "description": "<p>Retrieves a particular song</p>",
    "name": "GetSongs",
    "group": "Songs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the song unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>album unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>artist unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/songs/latests",
    "title": "latestList",
    "description": "<p>Lists all latest songs</p>",
    "name": "LatestSongs",
    "group": "Songs",
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/songs",
    "title": "List",
    "description": "<p>Lists all songs</p>",
    "name": "ListAllSongs",
    "group": "Songs",
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/artists/artistId/albums/albumId/songs",
    "title": "ArtistList",
    "description": "<p>Lists all songs by an artist</p>",
    "name": "ListArtistsSongs",
    "group": "Songs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>the album's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>the artist's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/songs/randoms",
    "title": "randomList",
    "description": "<p>randomize songs</p>",
    "name": "RandomSongs",
    "group": "Songs",
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/artists/artistId/albums/albumId/songs/id",
    "title": "update",
    "description": "<p>Udate a song or its detail</p>",
    "name": "UpdateSongs",
    "group": "Songs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the song's id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>the album's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>the artist's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/artists/artistId/albums/albumId/songs",
    "title": "Upload",
    "description": "<p>Upload a song</p> <p>The form should be sent as multipart/form-data The particular input field that file should be attached to should be in this form</p> <p>&lt; input name=&quot;_song&quot; type=&quot;file&quot;  / &gt;</p>",
    "name": "UploadSongs",
    "group": "Songs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "albumId",
            "description": "<p>the album's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artistId",
            "description": "<p>the artist's unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: these fields are required as well as _song required as a form data",
          "content": "{\n   \"mood\": \"possible moods\",\n    \"genre\": \"possible genre\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/songs/filter",
    "title": "filter",
    "description": "<p>Lists all songs based on mood or genre</p>",
    "name": "filterSongs",
    "group": "Songs",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example: one of these field is required.",
          "content": "   \"mood\": \"required mood\",\n    \"genre\": \"required genre\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/song.js",
    "groupTitle": "Songs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create",
    "description": "<p>Create a user</p>",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example: all fields are required",
          "content": "{\n       \"email\": \"email address of the user.\",\n       \"lastName\": \"lastName Lastname of the user\",\n       \"password\": \"password of the user\",\n       \"firstName\": \"firstName of the user\",\n       \"role\": \"user's role\",\n       \"phoneNumber\": \"user phone number\",\n       \"stageName\": \"if user is an artist\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete",
    "description": "<p>Delete a user</p>",
    "name": "DeleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the user's id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Detail",
    "description": "<p>Retrieve a user | shows user's detail</p>",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List",
    "description": "<p>Retrieve/List all users</p>",
    "name": "ListUsers",
    "group": "Users",
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update",
    "description": "<p>Update a user | updates user's detail or information</p>",
    "name": "PutUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the user's id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: all or anyone of these fields",
          "content": "{\n       \"email\": \"email address of the user.\",\n       \"lastName\": \"lastName Lastname of the user\",\n       \"firstName\": \"firstName of the user\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login",
    "description": "<p>Login a user</p>",
    "name": "loginUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token value.(available on response header)</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example: all fields are required",
          "content": "{\n       \"email\": \"user email\",\n       \"password\": \"user password\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request, usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"success\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The success of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"success\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
