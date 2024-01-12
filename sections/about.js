import { ScrollView, Text } from "react-native";
import Theme, { COLORS } from "../assets/theme";

const AboutSection = () => {
    return (
        <ScrollView style={{ ...Theme.container, borderTopWidth: 1, borderTopColor: COLORS.danger, ...Theme.pad1 }}>
            <Text style={Theme.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam risus pharetra, porta erat sit amet, cursus mauris. Suspendisse aliquet ultrices massa, a porttitor diam condimentum non. Duis a nunc vitae ante hendrerit porta eu quis mi. Sed sed felis vitae ante porta venenatis. Nunc pulvinar, mauris vitae luctus tempor, felis nunc lobortis magna, sed gravida elit nisl ut lacus. Proin finibus sit amet risus vel vestibulum. Praesent risus neque, laoreet sed sapien sit amet, varius ultrices ipsum.
            </Text>
            <Text style={Theme.p}>
                Cras vel felis ut velit elementum volutpat eu id nisl. Ut tempus aliquam odio in pulvinar. Morbi a sapien id nunc fringilla gravida. In hac habitasse platea dictumst. Aenean elit enim, aliquam sed gravida et, facilisis vel eros. Vestibulum imperdiet velit ac viverra lobortis. Donec viverra lectus et ultricies volutpat. Quisque at porttitor nisi. Etiam vel elit orci. Aliquam erat volutpat. Nullam porta quis ligula maximus rhoncus. Curabitur ullamcorper urna non leo accumsan, vitae congue lacus lobortis.
            </Text>
            <Text style={Theme.p}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac nunc eu eros sollicitudin egestas. Aliquam nec tortor ex. Donec fringilla, massa eu consequat pretium, risus nibh vulputate ipsum, faucibus ullamcorper est urna at lacus. Nunc ornare iaculis sapien, in dignissim ex elementum at. Phasellus eget venenatis mi. Nullam et aliquet arcu. Aliquam non erat dictum, sollicitudin libero at, dapibus nibh. Donec maximus feugiat elit sit amet molestie. Curabitur imperdiet scelerisque nisl, at tincidunt lacus suscipit in. Vivamus id accumsan eros. Curabitur pharetra lacinia ipsum, quis pretium nibh.
            </Text>
            <Text style={Theme.p}>
                Proin sed nunc sit amet velit scelerisque porta vitae eget mi. Curabitur vitae convallis justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vel felis ipsum. Aenean sit amet vestibulum nunc, sed ultricies mauris. Sed tincidunt fringilla mauris, ut accumsan lorem vulputate id. Donec ullamcorper turpis urna, cursus ullamcorper nisi pulvinar nec. Proin at accumsan dolor. Pellentesque eu turpis pulvinar, congue leo id, mattis lacus. In varius fringilla dignissim.
            </Text>
            <Text style={Theme.p}>
                Aliquam ut justo iaculis arcu scelerisque sagittis. Phasellus porttitor sit amet ante vel pulvinar. Nam turpis nisi, finibus placerat ipsum a, mattis condimentum dui. Integer ullamcorper luctus nisi, sed mollis massa scelerisque in. Maecenas ut justo id velit aliquet lacinia. Integer ut imperdiet odio. Sed eget mattis diam, nec pellentesque sem. Curabitur pretium nec est eget ullamcorper. Vestibulum ornare iaculis faucibus. Cras sem arcu, auctor congue leo et, tristique ultrices nibh. In cursus, neque id varius vehicula, metus odio scelerisque turpis, et ultrices massa nunc eget dui. Nulla eu ipsum id justo ullamcorper tristique eu vel sem.
            </Text>
        </ScrollView>
    )
}

export default AboutSection;