import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

const LoginScreen = () => {
    const goToProfile = () => {
        Actions.profile()
    }
    return (
        <Container style={{flex:1}}>
            <Content style={{flex:1, backgroundColor:"#FFEB3D"}}>
                <View style={{marginTop:30, alignItems:"center", justifyContent:"center"}}>
                    <Image source={require('../images/l2.png')}/>
                </View>
                <View style={{flex:1}}>
                    <Form style={{flex:1}}>
                        <Item stackedLabel>
                            <Label style={{marginLeft:100, marginTop:20}}>Nomer Handphone</Label>
                            <Input style={{backgroundColor:"white", underline:10, marginTop:30}} />
                        </Item>
                        <View style={{marginTop:10, alignItems:"center", justifyContent:"center"}}>
                            <Button style={{width:100, alignItems:"center", justifyContent:"center"}} warning onPress = {goToProfile}><Text> MASUK </Text></Button>
                        </View>
                        <View style={{marginTop:10, alignItems:"center", justifyContent:"center"}}>
                            <Button style={{width:100, alignItems:"center", justifyContent:"center"}} warning><Text> KELUAR </Text></Button>
                        </View>
                    </Form>
                </View>
            </Content>
        </Container>
    )
}
export default LoginScreen
