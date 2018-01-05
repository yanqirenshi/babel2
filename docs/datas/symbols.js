var _SYMBOLS = [
    {
        "type": "defvar",
        "name": "*suppress-character-coding-errors*",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "character-coding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "character-encoding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "encoding-error",
        "name": "defun",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "character-decoding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "end-of-input-in-character",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "character-out-of-range",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "defun",
        "name": "decoding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "invalid-utf8-starter-byte",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "invalid-utf8-continuation-byte",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "overlong-utf8-sequence",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "invalid-gbk-byte",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "define-condition",
        "name": "invalid-gbk-character",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "defvar",
        "name": "*default-eol-style*",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "defclass",
        "name": "external-format",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "defmethod",
        "name": "print-object",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "defun",
        "name": "make-external-format",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "defun",
        "name": "ensure-external-format",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "defun",
        "name": "external-format-equal",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "defun",
        "name": "lookup-mapping",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "defun",
        "name": "sharp-backslash-reader",
        "description": "",
        "package": "babel2",
        "file": "sharp-backslash.lisp"
    }
    , {
        "type": "defun",
        "name": "make-sharp-backslash-reader",
        "description": "",
        "package": "babel2",
        "file": "sharp-backslash.lisp"
    }
    , {
        "type": "defmacro",
        "name": "enable-sharp-backslash-syntax",
        "description": "",
        "package": "babel2",
        "file": "sharp-backslash.lisp"
    }
    , {
        "type": "defun",
        "name": "set-sharp-backslash-syntax-in-readtable",
        "description": "",
        "package": "babel2",
        "file": "sharp-backslash.lisp"
    }
    , {
        "type": "defmacro",
        "name": "ub-get",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defmacro",
        "name": "ub-set",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defmacro",
        "name": "string-get",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defmacro",
        "name": "string-set",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defconstant",
        "name": "unicode-char-code-limit",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defparameter",
        "name": "*string-vector-mappings*",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defparameter",
        "name": "*simple-base-string-vector-mappings*",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "check-vector-bounds",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defmacro",
        "name": "with-simple-vector",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defmacro",
        "name": "with-checked-simple-vector",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "octets-to-string",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "octets2string",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "bom-vector",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "string-to-octets",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "string2octets",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "concatenate-strings-to-octets",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "string-size-in-octets",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "defun",
        "name": "vector-size-in-chars",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "deftype",
        "name": "eol-style",
        "description": "",
        "package": "babel2.types",
        "file": "types.lisp"
    }
    , {
        "type": "deftype",
        "name": "unicode-char",
        "description": "",
        "package": "babel2.types",
        "file": "types.lisp"
    }
    , {
        "type": "deftype",
        "name": "simple-unicode-string",
        "description": "",
        "package": "babel2.types",
        "file": "types.lisp"
    }
    , {
        "type": "deftype",
        "name": "unicode-string",
        "description": "",
        "package": "babel2.types",
        "file": "types.lisp"
    }
    , {
        "type": "defgeneric",
        "name": "get-output-stream-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "vector-extend",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defclass",
        "name": "in-memory-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-element-type",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "stream-accepts-octets?",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "stream-accepts-characters?",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defclass",
        "name": "in-memory-input-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defclass",
        "name": "in-memory-output-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "make-in-memory-output-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "make-in-memory-input-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defclass",
        "name": "vector-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    /* xxx */
    , {
        "type": "defclass",
        "name": "vector-input-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defclass",
        "name": "vector-output-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "define-condition",
        "name": "in-memory-stream-error",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "define-condition",
        "name": "in-memory-stream-closed-error",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "define-condition",
        "name": "wrong-element-type-stream-error",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "wrong-element-type-stream-error",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "check-if-open",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "check-if-accepts-octets",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "check-if-accepts-characters",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-read-byte",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-listen",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-read-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-write-byte",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "extend-vector-output-stream-buffer",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-write-char",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-write-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-write-string",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-line-column",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "stream-file-position",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defun",
        "name": "make-vector-stream-buffer",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmethod",
        "name": "get-output-stream-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmacro",
        "name": "with-output-to-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "defmacro",
        "name": "with-input-from-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
];
/*
    , {
        "type": "",
        "name": "",
        "description": "",
        "package": "",
        "file": ""
    }
*/
