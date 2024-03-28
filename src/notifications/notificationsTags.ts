import { OneSignal } from "react-native-onesignal";

export function tagUserEmailCreated(email: string) {
    OneSignal.User.removeTags(["user_email"]);
}