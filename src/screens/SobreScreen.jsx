import { Button, Text, View } from "react-native"
import { TextInput } from "react-native-paper"
import { styles } from "../lib/styles"

export const SobreScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Coloque seu Nome</Text>
            <TextInput label="Nome"></TextInput>
            <Text>Coloque seu E-mail</Text>
            <TextInput label="E-mail"></TextInput>
            <Text>Coloque seu Telefone</Text>
            <TextInput label="Telefone"></TextInput>
            <Button title="Enviar" onPress={() => navigation.navigate("Formulario")}
            ></Button>
            <Button title="volte" onPress={() => navigation.navigate("Home")}
            ></Button>
        </View>
    )
}