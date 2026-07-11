package week2.Module_2.Searching;

public class BinarySearch {

    public static void main(String[] args) {

        int[] arr={10,20,30,40,50,60};

        int target=50;

        int left=0,right=arr.length-1;

        while(left<=right){

            int mid=(left+right)/2;

            if(arr[mid]==target){

                System.out.println("Found at index "+mid);
                return;
            }

            if(arr[mid]<target)
                left=mid+1;
            else
                right=mid-1;
        }

        System.out.println("Not Found");
    }
}
