public class Student {

    private String name;
    private int age;
    private String course;

    private Student(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.course = builder.course;
    }

    public void display() {
        System.out.println(name + " " + age + " " + course);
    }

    static class Builder {

        private String name;
        private int age;
        private String course;

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setAge(int age) {
            this.age = age;
            return this;
        }

        public Builder setCourse(String course) {
            this.course = course;
            return this;
        }

        public Student build() {
            return new Student(this);
        }
    }

    public class Main {

    public static void main(String[] args) {

        Student student = new Student.Builder()
                .setName("Karan")
                .setAge(22)
                .setCourse("M.Tech")
                .build();

        student.display();
    }
}
}