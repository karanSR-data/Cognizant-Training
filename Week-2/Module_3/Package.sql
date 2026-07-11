CREATE OR REPLACE PACKAGE math_pkg AS
    FUNCTION add_num(a NUMBER, b NUMBER) RETURN NUMBER;
END math_pkg;
/

CREATE OR REPLACE PACKAGE BODY math_pkg AS

    FUNCTION add_num(a NUMBER, b NUMBER)
    RETURN NUMBER
    IS
    BEGIN
        RETURN a + b;
    END;

END math_pkg;
/

BEGIN
    DBMS_OUTPUT.PUT_LINE(math_pkg.add_num(10,20));
END;
/