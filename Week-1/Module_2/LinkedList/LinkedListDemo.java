package week2.Module_2.LinkedList;

import java.util.LinkedList;

public class LinkedListDemo {

    public static void main(String[] args) {

        LinkedList<Integer> list=new LinkedList<>();

        list.add(10);
        list.add(20);
        list.addFirst(5);
        list.addLast(30);

        System.out.println(list);

        list.remove(Integer.valueOf(20));

        System.out.println(list);

        System.out.println("Contains 30 : "+list.contains(30));
    }
}