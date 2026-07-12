package week1.DSA.Ecommerce;


import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {

    public static Product binarySearch(Product[] products, String target) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int compare = products[mid].productName.compareToIgnoreCase(target);

            if (compare == 0)
                return products[mid];

            else if (compare < 0)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(103, "Phone", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories")
        };

        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        Product result = binarySearch(products, "Phone");

        if (result != null) {
            System.out.println("Product Found");
            System.out.println(result.productId + " " + result.productName + " " + result.category);
        } else {
            System.out.println("Product Not Found");
        }
    }
}
