package week2.Module_2.Arrays;


public class ArrayInsertion {
    public static void main(String[] args) {

        int[] arr = {10,20,30,40};
        int position = 2;
        int value = 25;

        int[] newArr = new int[arr.length + 1];

        for(int i=0,j=0;i<newArr.length;i++){

            if(i==position){
                newArr[i]=value;
            }else{
                newArr[i]=arr[j++];
            }
        }

        System.out.println(Arrays.toString(newArr));
    }
}