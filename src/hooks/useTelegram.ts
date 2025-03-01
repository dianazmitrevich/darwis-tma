declare global {
    interface Window {
        Telegram: {
            WebApp: {
                expand: () => void;
                disableVerticalSwipes: () => void;
            };
        };
    }
}

export const useTelegram = () => {
    const tg = window.Telegram.WebApp;

    return tg;
};
