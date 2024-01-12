import { Text } from "react-native"
import Theme from "../assets/theme"

export const Header = ({ children, h1, h2, h3, h4, h5, h6 }) => {
    if (h1) {
        return (
            <Text style={Theme.h1}>
                {children}
            </Text>
        )
    } else if (h2) {
        return (
            <Text style={Theme.h2}>
                {children}
            </Text>
        )
    } else if (h3) {
        return (
            <Text style={Theme.h3}>
                {children}
            </Text>
        )
    } else if (h4) {
        return (
            <Text style={Theme.h4}>
                {children}
            </Text>
        )
    } else if (h5) {
        return (
            <Text style={Theme.h5}>
                {children}
            </Text>
        )
    } else if (h6) {
        return (
            <Text style={Theme.h6}>
                {children}
            </Text>
        )
    } else {
        return (
            <Text>
                {children}
            </Text>
        )
    }

}