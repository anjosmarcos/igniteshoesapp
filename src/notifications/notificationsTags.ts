import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreated() {
    OneSignal.User.addTags({
        user_name: "Marcos",
        user_email: "dev.marcosanjos@gmai.com",
        
    })
}