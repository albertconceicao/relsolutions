import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        orange: {
            "700": "#ED7526"
        },
        gray: {
            "700": "#424141"
        }
    },
    fonts: {
        heading: `'Coolvetica', sans-serif`,
        body: `'Coolvetica', sans-serif`
    }
})