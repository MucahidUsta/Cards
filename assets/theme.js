import { StyleSheet } from "react-native";

export const COLORS = {
    "primary": "#0d6efd",
    "secondary": "#6c757d",
    "success": "#198754",
    "info": "#0dcaf0",
    "warning": "#ffc107",
    "danger": "#dc3545",
    "light": "#f8f9fa",
    "dark": "#212529"
}



const Theme = StyleSheet.create(
    {
        centerContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
        container: { flex: 1 },
        p: { marginVertical: 5 },
        pad1: { padding: 10 },
        h1: { fontSize: 36 },
        h2: { fontSize: 30 },
        h3: { fontSize: 26 },
        h4: { fontSize: 22 },
        h5: { fontSize: 18 },
        h6: { fontSize: 14 },
    }
)

export default Theme;