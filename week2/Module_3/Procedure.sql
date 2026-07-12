CREATE OR REPLACE PROCEDURE greet_user(
    p_name IN VARCHAR2
)
AS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Hello ' || p_name);
END;
/

BEGIN
    greet_user('Karan');
END;
/