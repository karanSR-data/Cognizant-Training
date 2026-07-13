package week3.Module_5.SpringDataJPA_CountryManagement;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Integer> {

    // Facebook September 2019
    List<Stock> findByCodeAndDateBetween(
            String code,
            LocalDate start,
            LocalDate end);

    // Google price > 1250
    List<Stock> findByCodeAndCloseGreaterThan(
            String code,
            double price);

    // Highest Volume
    List<Stock> findTop3ByOrderByVolumeDesc();

    // Lowest Netflix price
    List<Stock> findTop3ByCodeOrderByCloseAsc(
            String code);

}