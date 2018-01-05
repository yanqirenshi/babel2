(in-package #:babel2)

(defun sharp-backslash-reader (original-reader stream char numarg)
  (let ((1st-char (read-char stream)))
    (if (and (char-equal 1st-char #\u)
             ;; because #\z is not a digit char...
             (digit-char-p (peek-char nil stream nil #\z) 16))
        ;; something better than READ would be nice here
        (let ((token (let ((*read-base* 16)) (read stream))))
          (if (typep token 'code-point)
              (code-char token)
              (if *read-suppress*
                  nil
                  (simple-reader-error
                   stream "Unrecognized character name: u~A" token))))
        (funcall original-reader
                 (make-concatenated-stream (make-string-input-stream
                                            (string 1st-char))
                                           stream)
                 char
                 numarg))))

(defun make-sharp-backslash-reader ()
  (let ((original-sharp-backslash (get-dispatch-macro-character #\# #\\)))
    (lambda (stream char numarg)
      (sharp-backslash-reader original-sharp-backslash stream char numarg))))

(defmacro enable-sharp-backslash-syntax ()
  `(eval-when (:compile-toplevel :execute)
     (setf *readtable* (copy-readtable *readtable*))
     (set-sharp-backslash-syntax-in-readtable)
     (values)))

(defun set-sharp-backslash-syntax-in-readtable ()
  (set-dispatch-macro-character #\# #\\ (make-sharp-backslash-reader))
  (values))
