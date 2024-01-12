import { Image, Text, View } from "react-native"
import Theme from "../assets/theme"
import { Header } from "./header"

const Card = ({ title, subtitle, image }) => {
    return (
        <View style={{ ...Theme.container, borderRadius: 7, borderWidth: 1, marginVertical: 10, padding: 10,flexDirection:"row" }}>
            <Image style={{ width: 64, height: 64, resizeMode: "cover", marginEnd:10 }} source={{ uri: image }} />
            <View>
                <Header h2>{title}</Header>
                <Header h4>{subtitle}</Header>
            </View>
        </View>
    )
}

export default Card;