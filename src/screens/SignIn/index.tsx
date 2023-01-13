import {
  View,
  Text,
  Image,
  StatusBar,
} from "react-native"

import { ButtonIcon } from "../../components/ButtonIcon"

import IllustrationImg from '../../assets/illustration.png'

import { styles as s } from "./styles"

export function SignIn() {

  return (
    <View style={s.container}>
      <StatusBar
        barStyle="default"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={IllustrationImg}
        style={s.image}
        resizeMode="stretch"
      />

      <View style={s.content}>
        <Text style={s.title}>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Text>

        <Text style={s.subtitle}>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Text>

        <ButtonIcon activeOpacity={.7}>
          Entrar com Discord
        </ButtonIcon>
      </View>
    </View>
  )
}