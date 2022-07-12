import { Text } from "@chakra-ui/react";
import CookieConsent from "react-cookie-consent";

export const Cookies = () => {
    return (
        <CookieConsent
        location="bottom"
        buttonText="Entendi e fechar"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#ED7526", opacity: "0.8"}}
        buttonStyle={{ color: "white", fontSize: "1.1rem", background: "#424141", marginRight: "8rem" }}
        expires={1}
        >
            <Text fontSize="1.3rem">Este website utiliza cookies para melhorar sua experiência.{" "}</Text>
        </CookieConsent>
    );
}