BEGIN
    FOR l IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || l.CustomerID
            || ' has Loan '
            || l.LoanID
            || ' due on '
            || l.DueDate
        );

    END LOOP;
END;
/