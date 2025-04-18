const { mongoose } = require("mongodb");
const Mongo_URL = "mongodb+srv://admin:admin123@cluster0.v4ru3.mongodb.net/FSD-CS-A"

mongoose.client(mongo_url).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.log("MongoDB Connection Failed", err);
}
    const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    address: String
});
const User = mongoose.model("User", userSchema);

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    console.log("User Created", user);
}

import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef {
    public static void main(String[] args) throws java.lang.Exception
	{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int testcases = Integer.parseInt(br.readLine());
    for (int t = 0; t < testcases; t++) {
        String[] p = br.readLine().split(" ");
            int n = Integer.parseInt(p[0]);
            int ki = Integer.parseInt(p[1]);
            String S = br.readLine().trim();

        List < Integer > on = new ArrayList <> ();
        for (int i = 0; i < n; i++) {
            if (S.charAt(i) == '1') {
                on.add(i);
            }
        }
        if (on.isEmpty()) {
            System.out.println(0);
            continue;
        }
            
            int sz = on.get(0);
        for (int i = 1; i < on.size(); i++) {
            sz += on.get(i) - on.get(i - 1) - 1;
        }
            
            int possible = Math.min(ki, sz);
        System.out.println(on.size() + possible);
    }

}
}
