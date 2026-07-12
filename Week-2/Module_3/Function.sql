CREATE OR REPLACE FUNCTION square_num(
    n NUMBER
)
RETURN NUMBER
IS
BEGIN
    RETURN n * n;
END;
/

BEGIN
    DBMS_OUTPUT.PUT_LINE(square_num(5));
END;
/