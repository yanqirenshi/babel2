var _SYMBOLS = [
    {
        "type": "Variable",
        "name": "*suppress-character-coding-errors*",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "character-coding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "character-encoding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Function",
        "name": "encoding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "character-decoding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "end-of-input-in-character",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "character-out-of-range",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Function",
        "name": "decoding-error",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "invalid-utf8-starter-byte",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "invalid-utf8-continuation-byte",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "overlong-utf8-sequence",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "invalid-gbk-byte",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Condition",
        "name": "invalid-gbk-character",
        "description": "",
        "package": "babel2.conditions",
        "file": "conditions.lisp"
    }
    , {
        "type": "Variable",
        "name": "*default-eol-style*",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "Class",
        "name": "external-format",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "print-object",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "Function",
        "name": "make-external-format",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "Function",
        "name": "ensure-external-format",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "Function",
        "name": "external-format-equal",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "Function",
        "name": "lookup-mapping",
        "description": "",
        "package": "babel2",
        "file": "external-format.lisp"
    }
    , {
        "type": "Function",
        "name": "sharp-backslash-reader",
        "description": "",
        "package": "babel2",
        "file": "sharp-backslash.lisp"
    }
    , {
        "type": "Function",
        "name": "make-sharp-backslash-reader",
        "description": "",
        "package": "babel2",
        "file": "sharp-backslash.lisp"
    }
    , {
        "type": "Macro",
        "name": "enable-sharp-backslash-syntax",
        "description": "",
        "package": "babel2",
        "file": "sharp-backslash.lisp"
    }
    , {
        "type": "Function",
        "name": "set-sharp-backslash-syntax-in-readtable",
        "description": "",
        "package": "babel2",
        "file": "sharp-backslash.lisp"
    }
    , {
        "type": "Macro",
        "name": "ub-get",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Macro",
        "name": "ub-set",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Macro",
        "name": "string-get",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Macro",
        "name": "string-set",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Constant Variable",
        "name": "unicode-char-code-limit",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Variable",
        "name": "*string-vector-mappings*",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Variable",
        "name": "*simple-base-string-vector-mappings*",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "check-vector-bounds",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Macro",
        "name": "with-simple-vector",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Macro",
        "name": "with-checked-simple-vector",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "octets-to-string",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "octets2string",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "bom-vector",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "string-to-octets",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "string2octets",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "concatenate-strings-to-octets",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "string-size-in-octets",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Function",
        "name": "vector-size-in-chars",
        "description": "",
        "package": "babel2",
        "file": "strings.lisp"
    }
    , {
        "type": "Type",
        "name": "eol-style",
        "description": "",
        "package": "babel2.types",
        "file": "types.lisp"
    }
    , {
        "type": "Type",
        "name": "unicode-char",
        "description": "",
        "package": "babel2.types",
        "file": "types.lisp"
    }
    , {
        "type": "Type",
        "name": "simple-unicode-string",
        "description": "",
        "package": "babel2.types",
        "file": "types.lisp"
    }
    , {
        "type": "Type",
        "name": "unicode-string",
        "description": "",
        "package": "babel2.types",
        "file": "types.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "get-output-stream-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "vector-extend",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Class",
        "name": "in-memory-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-element-type",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "stream-accepts-octets?",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "stream-accepts-characters?",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Class",
        "name": "in-memory-input-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Class",
        "name": "in-memory-output-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "make-in-memory-output-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "make-in-memory-input-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Class",
        "name": "vector-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Class",
        "name": "vector-input-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Class",
        "name": "vector-output-stream",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Condition",
        "name": "in-memory-stream-error",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Condition",
        "name": "in-memory-stream-closed-error",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Condition",
        "name": "wrong-element-type-stream-error",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "wrong-element-type-stream-error",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "check-if-open",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "check-if-accepts-octets",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "check-if-accepts-characters",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-read-byte",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-listen",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-read-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-write-byte",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "extend-vector-output-stream-buffer",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-write-char",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-write-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-write-string",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-line-column",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "stream-file-position",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Function",
        "name": "make-vector-stream-buffer",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Generic Function",
        "name": "get-output-stream-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Macro",
        "name": "with-output-to-sequence",
        "description": "",
        "package": "babel2-streams",
        "file": "streams.lisp"
    }
    , {
        "type": "Macro",
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
