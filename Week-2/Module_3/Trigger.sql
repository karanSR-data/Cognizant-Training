CREATE TABLE student_log(
    message VARCHAR2(100)
);

CREATE OR REPLACE TRIGGER student_trigger
AFTER INSERT
ON students
FOR EACH ROW
BEGIN
    INSERT INTO student_log
    VALUES('Student Inserted');
END;
/