(in-package :babel2.conditions)

;;;;;
;;;;; All of Babel's error conditions are subtypes of
;;;;; CHARACTER-CODING-ERROR.  This error hierarchy is based on SBCL's.
;;;;;

;;;;;
;;;;; encodings.lisp
;;;;;
(defvar *suppress-character-coding-errors* nil
  "If non-NIL, encoding or decoding errors are suppressed and the
the current character encoding's default replacement character is
used.")

;;;
;;; encoding-error
;;;
(define-condition character-coding-error (error)
  ((buffer :initarg :buffer
           :reader character-coding-error-buffer)
   (position :initarg :position
             :reader character-coding-error-position)
   (encoding :initarg :encoding
             :reader character-coding-error-encoding)))

(define-condition character-encoding-error (character-coding-error)
  ((code :initarg :code
         :reader character-encoding-error-code))
  (:report (lambda (c s)
             (format s "Unable to encode character code point ~A as ~S."
                     (character-encoding-error-code c)
                     (character-coding-error-encoding c)))))

(declaim (inline encoding-error))
(defun encoding-error (code enc buf pos &optional
                       (sub +default-substitution-code-point+)
                       (e 'character-encoding-error))
  (unless *suppress-character-coding-errors*
    (error e :encoding enc
             :buffer buf
             :position pos
             :code code))
  sub)

;;;
;;; decoding-error
;;;
(define-condition character-decoding-error (character-coding-error)
  ((octets :initarg :octets
           :reader character-decoding-error-octets))
  (:report (lambda (c s)
             (format s "Illegal ~S character starting at position ~D."
                     (character-coding-error-encoding c)
                     (character-coding-error-position c)))))

(define-condition end-of-input-in-character (character-decoding-error)
  ()
  (:documentation "Signalled by DECODERs or CODE-POINT-COUNTERs
of variable-width character encodings."))

(define-condition character-out-of-range (character-decoding-error)
  ()
  (:documentation
   "Signalled when the character being decoded is out of range."))

(declaim (inline decoding-error))
(defun decoding-error (octets enc buf pos &optional
                       (sub +default-substitution-code-point+)
                       (e 'character-decoding-error))
  (unless *suppress-character-coding-errors*
    (error e :octets octets
             :encoding enc
             :buffer buf
             :position pos))
  sub)

;;;;;
;;;;; enc-unicode.lisp
;;;;;
(define-condition invalid-utf8-starter-byte (character-decoding-error)
  ()
  (:documentation "Signalled when an invalid UTF-8 starter byte is found."))

(define-condition invalid-utf8-continuation-byte (character-decoding-error)
  ()
  (:documentation
   "Signalled when an invalid UTF-8 continuation byte is found."))

(define-condition overlong-utf8-sequence (character-decoding-error)
  ()
  (:documentation "Signalled upon overlong UTF-8 sequences."))


;;;;;
;;;;; enc-gbk.lisp
;;;;;
(define-condition invalid-gbk-byte (character-decoding-error)
  ()
  (:documentation "Signalled when an invalid GBK byte is found."))

(define-condition invalid-gbk-character (character-encoding-error)
  ()
  (:documentation "Signalled when an invalid GBK character is found."))
