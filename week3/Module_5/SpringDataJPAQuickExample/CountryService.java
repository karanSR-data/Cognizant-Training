public void deleteCountry(String code) {

    Country country = countryRepository.findByCode(code)
            .orElseThrow(() ->
                    new CountryNotFoundException("Country not found"));

    countryRepository.delete(country);

    System.out.println("Country deleted successfully.");

}