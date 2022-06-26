package sprint_1.day_3;

import java.util.Objects;

public class VowelConsonant {
    String check(String vc) {
        String[] conso = {"b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"};
        String str = vc.toLowerCase();
        if ("a".equals(str) || "e".equals(str) || "i".equals(str) || "o".equals(str) || "u".equals(str)) {
           return "Vowel";
        } else {
            for (int i = 0; i < conso.length; i++) {
                if (Objects.equals(str, conso[i])) {
                    return "Consonant";
                }
            }
        }
        return "Invalid Character";
    }
    public static void main(String[] args) {

      VowelConsonant kt = new VowelConsonant();

        System.out.println(kt.check("I"));
        System.out.println(kt.check("K"));
        System.out.println(kt.check("*"));
    }

}
