package sprint_1.day_2;

public class Primefactor {
    public static void main(String[] args) {
        factors(12);
    }

    public static void factors(int n){
        if(n<2 || n>100){
            System.out.println("Invalid number");
        }
        else{
            for(int i=1;i<=n;i++){
                if(n%i==0){
                    System.out.println(i);
                }
            }
        }
    }
}
