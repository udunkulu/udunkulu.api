define({ "api": [
  {
    "type": "post",
    "url": "/album",
    "title": "Create",
    "description": "<p>Creates an album</p>",
    "name": "CreateAlbum",
    "group": "Albums",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example: only artist and title fields are required",
          "content": "{\n    \"title\": \"album title\",\n    \"artist\": \"artists name\",\n    \"discription\": \"album discription\"\n  }",
          "type": "json"
        }
      ]
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
            "description": "<p>This is the info about the request usually success</p>"
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
    "url": "/album/:id",
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
            "description": "<p>This is the info about the request usually success</p>"
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
    "url": "/albums/:id",
    "title": "Detail",
    "description": "<p>Retrieves an album or rather shows the details of an album</p>",
    "name": "GetAlbum",
    "group": "Albums",
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
            "description": "<p>This is the info about the request usually success</p>"
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
    "url": "/albums",
    "title": "List",
    "description": "<p>Retrieves all the albums or rather shows all the details of available albums</p>",
    "name": "ListAlbum",
    "group": "Albums",
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
            "description": "<p>This is the info about the request usually success</p>"
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
    "url": "/albums/:id",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: all or anyone of these fields",
          "content": "{\n       \"email\": \"email address of the album.\",\n       \"lastName\": \"lastName Lastname of the album\",\n       \"firstName\": \"firstName of the album\"\n   }",
          "type": "json"
        }
      ]
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
            "description": "<p>This is the info about the request usually success</p>"
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
    "url": "/users/userId/music/:id",
    "title": "Detail",
    "description": "<p>Retrieve a music</p>",
    "name": "GetMusic",
    "group": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>music unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/music.js",
    "groupTitle": "Music",
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
            "description": "<p>This is the info about the request usually success</p>"
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
          "content": "{\n       \"email\": \"email address of the user.\",\n       \"lastName\": \"lastName Lastname of the user\",\n       \"password\": \"password address of the user\",\n       \"firstName\": \"firstName of the user\"\n   }",
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
            "description": "<p>This is the info about the request usually success</p>"
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
            "description": "<p>This is the info about the request usually success</p>"
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
            "description": "<p>This is the info about the request usually success</p>"
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
            "description": "<p>This is the info about the request usually success</p>"
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
            "description": "<p>This is the info about the request usually success</p>"
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
