package sprint_1.day_3;

public class Student {
    int rollNo;
    String name;
    int marks;

    void displayStudentDetails() {
        System.out.println("Roll No is : " + rollNo);
        System.out.println("Name is : " + name);
        System.out.println("Marks is : " + marks);
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student();

        s1.rollNo = 1;
        s1.name = "sumit";
        s1.marks = 10;
        s1.displayStudentDetails();

        s2.rollNo = 2;
        s2.name = "Akash";
        s2.marks = 9;
        s2.displayStudentDetails();
    }
}
