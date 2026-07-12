CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_DepartmentID NUMBER,
    p_Bonus NUMBER
)
AS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_Bonus / 100)
    WHERE DepartmentID = p_DepartmentID;

    COMMIT;

END;
/