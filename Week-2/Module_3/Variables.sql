DECLARE
    emp_name VARCHAR2(50) := 'Karan';
    salary NUMBER := 50000;
BEGIN
    DBMS_OUTPUT.PUT_LINE('Employee: ' || emp_name);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || salary);
END;
/