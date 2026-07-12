DECLARE
    CURSOR c_emp IS
        SELECT employee_id, first_name
        FROM employees;

    v_id employees.employee_id%TYPE;
    v_name employees.first_name%TYPE;

BEGIN
    OPEN c_emp;

    LOOP
        FETCH c_emp INTO v_id, v_name;
        EXIT WHEN c_emp%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE(v_id || ' ' || v_name);
    END LOOP;

    CLOSE c_emp;
END;
/