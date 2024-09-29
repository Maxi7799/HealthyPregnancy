
import { useTranslation } from "react-i18next";

export const translate = (key: string) => {
    const [t] = useTranslation("global")
    return t(key);
};
