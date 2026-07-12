BEGIN
    FOR c IN (
        SELECT CustomerID, Age, InterestRate
        FROM Customers
        WHERE Age > 60
    ) LOOP

        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = c.CustomerID;

    END LOOP;

    COMMIT;
END;
/