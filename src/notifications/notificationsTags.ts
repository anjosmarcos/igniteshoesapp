import { OneSignal } from "react-native-onesignal";

export function tagUserEmailCreated(userEmail: string) {
  OneSignal.User.addTag("user_email", userEmail)
}