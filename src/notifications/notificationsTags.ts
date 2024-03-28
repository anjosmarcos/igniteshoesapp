import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreated() {
    OneSignal.User.addTags({
        user_name: "Marcos",
        user_email: "dev.marcosanjos@gmai.com",
        
    })
}

export function tagCartUpdate(itemsCount: string){
    OneSignal.User.addTag("cart_items_count", itemsCount);
}