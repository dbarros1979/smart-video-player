import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MovieCard = ({ Title, url }: { Title: string, url: string }) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            gap: 20,
            marginTop: 20
        }}>
            <View>
                <Image resizeMode='contain' style={{
                    width: 160,
                    height: 300,
                    borderRadius: 20
                }} source={{ uri: url }} />
            </View>
            <View style={{
                marginVertical: 20
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 25
                }}>{Title}</Text>
                <View style={{
                    flexDirection: 'row',
                    gap: 10
                }}>
                    <Text style={{
                        color: 'red',
                        fontSize: 18
                    }}>
                        Uma família entre o Brasil e a China
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 10
                }}>
                    <Ionicons name="star" size={18} color="yellow" />
                    <Ionicons name="star" size={18} color="yellow" />
                    <Ionicons name="star" size={18} color="yellow" />
                    <Ionicons name="star" size={18} color="yellow" />
                    <Ionicons name="star" size={18} color="gray" />
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 5
                }}>
                    <Text style={{
                        color: 'gray',
                        fontSize: 18
                    }}><MaterialCommunityIcons name="eye" size={24} color="white" /> 15M</Text>
                    <Text style={{
                        color: 'gray',
                        fontSize: 18
                    }}><Ionicons name="heart-sharp" size={24} color="white" /> 15M</Text>
                    <Text style={{
                        color: 'gray',
                        fontSize: 18
                    }}><MaterialIcons name="file-download" size={24} color="white" /> 15M</Text>
                </View>
                <Text style={{
                    color: 'white',
                    fontSize: 18
                }}>Tocando em temas que são proibidos até hoje na China, este documentário revela importantes aspectos da Revolução Cultural de Mao Tsé-Tung, como o massacre na Praça da Paz Celestial, as relações Brasil-China, e os impactos desses eventos na vida e na visão de mundo das pessoas.
                </Text>
            </View>
        </View>
    )
}

export default MovieCard