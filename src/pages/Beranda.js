import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Left, Button, Thumbnail, Input, Label, Content, Body, Right, Title, Card, Header, CardItem, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Beranda = () => {
    const goToOutlet = () => {
        Actions.outlet()
    }
    const goToOrder = () => {
        Actions.order()
    }
    const goToMenu = () => {
        Actions.menu()
    }
    return (
        <Container style={{flex:1, backgroundColor:"#FFED54"}}>
            <Content style={{flex:1, backgroundColor:"#FFED54", marginTop:10}}>
                <Card>
                    <CardItem>
                        <Body>
                            <Card style={{marginTop:0, alignItems:"center", justifyContent:"center"}}>
                                <CardItem cardBody>
                                    <Image source={require("../images/dBestO_Binus_dari-Indonesia-untuk-dunia.png")} style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                            </Card>
                        </Body>
                    </CardItem>
                </Card>
                <View style={{marginTop:10, alignItems:"center", justifyContent:"center", flexDirection: "row"}}>
                    <Button style={{width:70, alignItems:"center", justifyContent:"center"}} warning><Text style={{color: "white"}}> BERANDA </Text></Button>
                    <Button style={{width:70, alignItems:"center", justifyContent:"center", marginLeft: 5}} warning onPress = {goToOutlet}><Text style={{color: "white"}}> OUTLET </Text></Button>
                    <Button style={{width:70, alignItems:"center", justifyContent:"center", marginLeft: 5}} warning onPress = {goToOrder}><Text style={{color: "white"}}> ORDER </Text></Button>
                    <Button style={{width:70, alignItems:"center", justifyContent:"center", marginLeft: 5}} warning onPress = {goToMenu}><Text style={{color: "white"}}> MENU </Text></Button>
                </View>
                <Card style={{marginTop:50, height:150, alignItems:"center", justifyContent:"center"}}>
                    <CardItem>
                        <Body>
                            <Card style={{marginTop:10, height:170, alignItems:"center", justifyContent:"center"}}>
                                <CardItem style={{marginTop:10, height:10, alignItems:"center", justifyContent:"center"}}>
                                    <Text>
                                        ~ APA ITU D'BESTO ~
                                    </Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <Text>
                                        d'BestO adalah produk asli buatan Indonesia,
                                        hadir sebagai kreasi anak negeri,
                                        diproduksi di dalam negeri,
                                        100 persen menggunakan bahan baku pilihan dari kekayaan Nusantara,
                                        Citarasa lokal dengan kualitas Internasional,
                                        dipersembahkan bagi keluarga Indonesia dan untuk dunia...
                                    </Text>
                                </CardItem>
                                <CardItem>

                                </CardItem>
                            </Card>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
            <Footer style={{alignItems:"center", marginRight:10, marginBottom:10, backgroundColor:"#FFED54"}}>
                <FooterTab style={{backgroundColor:"white", borderBottomLeftRadius:10, borderTopLeftRadius:10, borderColor:"#E76400", marginLeft:10}}>
                    <Button style={{backgroundColor:"white", borderBottomLeftRadius:10, borderTopLeftRadius:10, borderColor:"#E76400"}}>
                        <Icon style={{color:"black"}} name="arrow-back" />
                    </Button>
                    <Button style={{fontWeight: "bold", borderLeftWidth:150, backgroundColor:"#E76400", borderBottomRightRadius:10, borderTopRightRadius:10, borderColor:"#E76400"}}>
                        <Text style={{fontWeight: "bold"}}>d'BestO Jagonya Rasa</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
export default Beranda
