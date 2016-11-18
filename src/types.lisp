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
