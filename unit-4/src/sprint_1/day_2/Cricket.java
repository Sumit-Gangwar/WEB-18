package sprint_1.day_2;

public class Cricket {
    public static void main(String[] args) {
        score(1,2,3,4,5);
    }
    public static void score(int one, int two,int three,int four,int six){
        int totalRun = one + (two*2)+(three*3)+(four*4)+(six*6);
        System.out.println(totalRun);
    }
}
