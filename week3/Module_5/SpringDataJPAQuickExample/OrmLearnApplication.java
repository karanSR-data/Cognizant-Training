@Override
public void run(String... args) {

    service.deleteCountry("NP");

    try {

        System.out.println(service.findCountryByCode("NP"));

    } catch (CountryNotFoundException e) {

        System.out.println(e.getMessage());

    }

}