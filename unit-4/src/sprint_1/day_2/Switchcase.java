package sprint_1.day_2;

public class Switchcase {
    public static void main(String[] args) {
        String city = "Mumbai";

        switch (city){
            case "Mumbai":
                System.out.println("Financial City");
                break;
            case "Delhi":
                System.out.println("Capital of country");
                break;
            case "Bangalore":
                System.out.println("Cyber city");
                break;
            case "Kolkata":
                System.out.println("City of joy");
                break;
            default:
                System.out.println("May be other city");

        }
    }

}
