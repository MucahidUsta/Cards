import { ScrollView, Text } from "react-native";
import Theme from "../assets/theme";
import data from "../mock_data/users.json"
import Card from "../components/card";

const UserListSection = () => {
    return <ScrollView style={Theme.container}>
        {data.users.map((user, i) => (
            // <Text key={i}>{user.firstName} {user.lastName}</Text>
            <Card key={i} title={user.firstName + " " + user.lastName} subtitle={user.email} image={user.image} />
        ))}
    </ScrollView>
}

export default UserListSection;