package week2.Module_2.Arrays;

public class MaxMin {

    public static void main(String[] args) {

        int[] arr={25,18,92,44,13};

        int max=arr[0];
        int min=arr[0];

        for(int num:arr){

            if(num>max) max=num;

            if(num<min) min=num;
        }

        System.out.println("Maximum = "+max);
        System.out.println("Minimum = "+min);
    }
}