(in-package :cl-user)

(in-package :babel2.types)

(deftype eol-style ()
  "Possible end-of-line styles."
  '(member :cr :lf :crlf))

(deftype unicode-char ()
  "This character type can hold any characters whose CHAR-CODEs are less than UNICODE-CHAR-CODE-LIMIT."
  #+lispworks 'lw:simple-char
  #-lispworks 'character)

(deftype simple-unicode-string ()
  "Alias for (SIMPLE-ARRAY UNICODE-CHAR (*))."
  '(simple-array unicode-char (*)))

(deftype unicode-string ()
  "Alias for (VECTOR UNICODE-CHAR *)."
  '(vector unicode-char *))

;;;; Utilities used in enc-*.lisp

(defconstant +default-substitution-code-point+ #x1a
  "Default ASCII substitution character code point used in case of an encoding/decoding error.")
