import { Button, Text, View } from "react-native"
import { Image } from "react-native"
import { styles } from "../lib/styles";


export const HomeScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Text>Olá sou o home</Text>
            <Button title='Ir para o Formulario'
                onPress={() => navigation.navigate("Formulario")}></Button>
        </View>
    );
};