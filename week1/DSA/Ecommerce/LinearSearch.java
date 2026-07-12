package week1.DSA.Ecommerce;

public class LinearSearch {

    public static Product linearSearch(Product[] products, String name) {

        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Watch", "Accessories")
        };

        Product result = linearSearch(products, "Phone");

        if (result != null) {
            System.out.println("Product Found");
            System.out.println(result.productId + " " + result.productName + " " + result.category);
        } else {
            System.out.println("Product Not Found");
        }
    }
}