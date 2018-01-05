(in-package #:cl-user)

(defpackage #:babel2.types
  (:nicknames :b2.type)
  (:use #:common-lisp)
  (:export #:eol-style
           #:unicode-char
           #:unicode-string
           #:simple-unicode-string
           #:+default-substitution-code-point+))

(defpackage #:babel2.conditions
  (:nicknames :b2.conditions)
  (:use #:common-lisp
        #:babel2.types)
  (:export #:*suppress-character-coding-errors*
           #:character-coding-error
           #:character-coding-error-buffer
           #:character-coding-error-position
           #:character-coding-error-encoding
           #:character-encoding-error
           #:character-encoding-error-code
           #:encoding-error
           #:character-decoding-error
           #:character-decoding-error-octets
           #:end-of-input-in-character
           #:character-out-of-range
           #:decoding-error
           #:invalid-utf8-starter-byte
           #:invalid-utf8-continuation-byte
           #:overlong-utf8-sequence
           #:invalid-gbk-byte
           #:invalid-gbk-character))

(defpackage #:babel2.encodings
  (:nicknames :b2-encodings)
  (:use #:common-lisp
        #:alexandria
        #:babel2.types
        #:babel2.conditions)
  ;; character encoding objects
  (:export #:list-character-encodings
           #:character-encoding
           #:*default-character-encoding*
           #:get-character-encoding
           #:enc-name
           #:enc-aliases
           #:enc-code-unit-size
           #:enc-max-units-per-char
           #:enc-native-endianness
           #:enc-decode-literal-code-unit-limit
           #:enc-encode-literal-code-unit-limit
           #:enc-use-bom
           #:enc-bom-encoding
           #:enc-nul-encoding
           #:enc-default-replacement
           #:ambiguous-encoding-p)
  ;; concrete mappings
  (:export #:instantiate-concrete-mappings
           #:concrete-mapping
           #:encoder
           #:decoder
           #:octet-counter
           #:code-point-counter
           #:code-point
           #:lookup-mapping
           #:with-simple-vector
           #:with-checked-simple-vector)
  ;; restart
  (:export #:retry-code))

(defpackage #:babel2
  (:nicknames :b2)
  (:use #:common-lisp
        #:alexandria
        #:babel2.types
        #:babel2.conditions)
  (:import-from #:babel2.encodings
                #:instantiate-concrete-mappings
                #:concrete-mapping
                #:code-point
                ;; TODO: Condition
                #:retry-code
                ;; TODO: Other
                #:*default-character-encoding*
                #:enc-name
                #:character-encoding
                #:enc-bom-encoding
                #:octet-counter
                #:octet-counter
                #:enc-use-bom
                #:encoder
                #:decoder
                #:code-point-counter
                #:lookup-mapping
                #:get-character-encoding
                #:list-character-encodings)
  ;; types
  (:export #:unicode-char
           #:unicode-char-code-limit
           #:unicode-string
           #:simple-unicode-string)
  ;; fixed sharp-backslash reader
  (:export #:enable-sharp-backslash-syntax
           #:set-sharp-backslash-syntax-in-readtable)
  ;; external formats
  (:export #:external-format
           #:make-external-format
           #:ensure-external-format
           #:external-format-encoding
           #:external-format-eol-style
           #:external-format-equal
           #:*default-eol-style*)
  ;; general user API
  (:export #:*default-character-encoding*
           #:list-character-encodings
           #:string-to-octets
           #:octets-to-string
           #:string2octets
           #:octets2string
           #:concatenate-strings-to-octets
           #:string-size-in-octets
           #:vector-size-in-chars)
  ;; condition
  (:export #:character-coding-error
           #:character-coding-error-encoding
           #:character-coding-error-buffer
           #:character-coding-error-position
           #:character-decoding-error
           #:character-decoding-error-octets
           #:character-encoding-error
           #:character-encoding-error-code
           #:end-of-input-in-character
           #:character-out-of-range
           #:invalid-utf8-starter-byte
           #:invalid-utf8-continuation-byte
           #:overlong-utf8-sequence
           #:retry-code))
