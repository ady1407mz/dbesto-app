import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Left, Button, Item, Input, Label, Content, Body, Right, Title, Card, Header, CardItem, Footer, FooterTab, Icon } from 'native-base';
export default class Nota extends Component {
    render() {
        return (
            <Container style={{flex:1}}>
                <Content style={{flex:1, backgroundColor:"#FFED54"}}>
                    <Card>
                        <CardItem>
                            <Body>
                                <View style={{marginLeft:120, alignItems:"center", justifyContent:"center"}}>
                                    <Text style={{fontWeight: "bold"}}>NOTA ORDER</Text>
                                </View>
                                <Item floatingLabel style={{marginTop: 50}}>
                                    <Label>Tanggal Pesan</Label>
                                    <Input value={"20-01-2020"} />
                                </Item>
                                <Item floatingLabel style={{marginTop: 30}}>
                                    <Label>Nama Pemesan</Label>
                                    <Input value={"ADY MIFTAKHUZ ZAMAN"} />
                                </Item>
                                <Item floatingLabel style={{marginTop: 30}}>
                                    <Label>Item Pesanan</Label>
                                    <Input value={"Paket Lubis"} />
                                </Item>
                                <Item floatingLabel style={{marginTop: 30}}>
                                    <Label>Jumlah Pesanan</Label>
                                    <Input value={"100 BOX"} />
                                </Item>
                                <Item floatingLabel style={{marginTop: 30}}>
                                    <Label>Nomor Handphones</Label>
                                    <Input value={"0858-9299-8043"} />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <View style={{marginTop:10, alignItems:"center", justifyContent:"center"}}>
                        <Button style={{width:100, alignItems:"center", justifyContent:"center"}} warning><Text style={{color: "white"}}> OK </Text></Button>
                    </View>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: '#F4F4F4'}}>
                        <Button >
                            <Icon style={{color: "#E76400", fontWeight:"bold"}}name="arrow-back" />
                        </Button>
                        <Button warning>
                            <Text style={{fontWeight: "bold"}}>d'BestO jagonya rasa</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
