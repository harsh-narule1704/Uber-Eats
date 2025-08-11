import { useEffect, useState } from "react";


export const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        const handleOffline = () => {
            setOnlineStatus(false);
        };

        const handleOnline = () => {
            setOnlineStatus(true);
        };

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);

    return onlineStatus;
}