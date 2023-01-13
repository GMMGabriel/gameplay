import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import DiscordImg from '../../assets/discord.png'

import { styles as s } from './styles'

type Props = TouchableOpacityProps & {
  children: string;
}

export function ButtonIcon({ children, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={s.container}
      {...rest}
    >
      <View style={s.iconWrapper}>
        <Image source={DiscordImg} style={s.icon} />
      </View>

      <Text style={s.title}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}