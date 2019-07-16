public class Main {
    public static void main(String[] args) {
        String startNumber = "12";
        for(int i = 0; i < 10; i++) {
            startNumber = lookAndSay(startNumber);
            System.out.println(lookAndSay(startNumber));
        }
    }
    public static String lookAndSay(String s) {
        int startValue = 0;
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(startValue) != s.charAt(i)) {
                String digitsTotal = s.substring(startValue, i);
                sb.append(digitsTotal.length());
                sb.append(s.charAt(startValue));
                startValue = i;
            }
        }
        sb.append(s.substring(startValue,s.length()).length()).append(s.charAt(startValue));
        return sb.toString();
    }
}
