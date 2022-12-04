import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";


export default function App({navigation}) {
    const [data, setdata] = useState([]);
    if (data.length <= 0) {
        fetch("http://localhost:3000/sendreq")
            .then(response => response.json())
            .then(json => {
                setdata(json)
                console.log(data);
            })
    }
    return (
        <View style={styles.container}>
            <FlatList style={{flex: 1, width: "100%"}}
                      data={data}
                      renderItem={({item, index}) => {
                          return (
                              <View style={styles.itemfl}>
                                  <Image style={{width: "100%", height: "800px"}} source={item.linkAnhGoc}/>
                                  <Text style={{color:"#9fc000",marginLeft:"20px",fontWeight:"bold", marginTop:"10px"}}>ID ảnh: {item.id}</Text>
                                  <Text style={{color:"#0051ff",marginLeft:"20px"}}>Tiêu đề: {item.name}</Text>
                                  <Text style={{color:"#0051ff",marginLeft:"20px"}}>Mô tả: {item.mota}</Text>
                                  <View style={{flexDirection:"row"}}>
                                      <Text style={{color:"#ff8f1f",marginLeft:"20px"}}>Link ảnh thu nhỏ: </Text>
                                      <a href={item.linkAnhGoc}>{item.linkAnhThuNho}</a>
                                  </View>
                                  <View style={{flexDirection:"row"}}>
                                      <Text style={{color:"#ff8f1f",marginLeft:"20px"}}>Link ảnh gốc: </Text>
                                      <a href={item.linkAnhGoc}>{item.linkAnhGoc}</a>
                                  </View>

                              </View>
                          )
                      }
                      }/>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    itemfl: {
        borderRadius: 10,
        alignSelf: "center",
        width: "70%",
        margin: 40,
        padding:10,
        flexDirection: "column",
        shadowColor: "#000",
        shadowOpacity: 0.44,
        shadowRadius: 20,
    },
});