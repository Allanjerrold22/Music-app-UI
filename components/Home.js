import React from "react";
import {
    Alert,
    ScrollView,
    Image,
    Animated,
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    SectionList,
    FlatList,
    ImageBackground,
    View,
  } from 'react-native';
  import { BlurView } from 'expo-blur';
  import dash from "../assets/dashboard.png"
  import menu from "../assets/menu.png"
  import notification from "../assets/notification.png"
  import play from "../assets/play.png"
  import plays from "../assets/plays.png"
  import RP1 from "../assets/RP1.png"
  import RP2 from "../assets/RP2.png"
  import RP3 from "../assets/RP3.png"
  import RP4 from "../assets/RP4.png"
  import RP5 from "../assets/RP5.png"
  import dot from "../assets/dot.png"
  
  

  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <ImageBackground
          source={item.imageLink}
          style={styles.itemPhoto}
          resizeMode="cover"
          
        >
            <BlurView intensity={40} style={{width:"80%",height:46,borderRadius:160,overflow:'hidden',borderRadius:20,justifyContent:'center',position:'absolute',bottom:12}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:12}}>

                    <View style={{flexDirection:'column'}}>
                    <Text style={{color:'white',fontSize:14,fontWeight:500}}>Mylove</Text>
                    <Text style={{color:'white',fontSize:12,fontWeight:300}}>Rocky Hill</Text>
                    </View>

                    <Image source={plays} resizeMode="contain" style={{height:30,width:30,justifyContent:'center'}}/>

                </View>
            </BlurView>

            
            

        </ImageBackground>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

const Home=()=> {
    return(
        <ScrollView style={{width:"100%",height:"100%", display:'flex',backgroundColor:'white'}}>
        
        <View style={{backgroundColor:'#FFFF'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:16,marginTop:55}}>
             <Image source={menu} style={{width:32,height:32}}/>
             <View style={{justifyContent:'center'}}>
             <Text style={{fontSize:16,fontWeight:500}}> Good Morning</Text>
             </View>
             <Image source={notification} style={{width:32,height:32}}/>
            </View>

            <View style={{alignItems:'center',marginHorizontal:20,marginTop:20}}>

           
            <ImageBackground source={dash} resizeMode="cover" style={{width:"100%",height:150}}>
                
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                    <View style={{flexDirection:'column',marginLeft:18,marginTop:80}}>
                        <Text style={{fontSize:18,fontWeight:600,color:'white'}}>
                            Sweet Melody 
                        </Text>
                        <Text style={{fontSize:14,fontWeight:400,color:'white'}}>
                            Little Mix
                        </Text>
                    </View>

                    <ImageBackground source={play} resizeMode='contain' style={{width:85,marginTop:78,marginRight:20,justifyContent:'center'}}>
                        <Text style={{color:'white',marginLeft:8}}>
                            Listen
                        </Text>

                    </ImageBackground>

                </View>
            </ImageBackground>
            </View>

            <SectionList
                    contentContainerStyle={{ marginHorizontal:12 }}
                    stickySectionHeadersEnabled={false}
                    sections={SECTIONS}
                    renderSectionHeader={({ section }) => (
                        <>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                        <Text style={{marginTop: 20,marginBottom: 5,color:'gray',fontWeight:500,marginHorizontal:16}}>
                            See all
                        </Text>

                        </View>
                        
                        {section.horizontal ? (
                            <FlatList
                            horizontal
                            data={section.data}
                            renderItem={({ item }) => <ListItem item={item} />}
                            showsHorizontalScrollIndicator={false}
                            />
                        ) : null}
                        </>
                    )}
                    renderItem={({ item, section }) => {
                        if (section.horizontal) {
                        return null;
                        }
                        return <ListItem item={item} />;
                    }}
                    />

                    <Text style={{
                        fontWeight: '600',
                        fontSize: 18,
                        color: 'black',
                        marginBottom: 5,
                        marginHorizontal:16

                    }}>Recently Played</Text>

                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20}}>
                        <View style={{flexDirection:'row',marginTop:16}}>
                            <Image source={RP1} resizeMode="contain" style={{width:55,height:55}}/>
                            <View style={{flexDirection:'column',justifyContent:'center',marginHorizontal:16}}>
                                <Text style={{fontSize:14,fontWeight:600}}>I Miss You ft. Julia Michaels</Text>
                                <Text style={{fontSize:12,marginTop:4}}>Clean Bandit</Text>
                            </View>
                        </View>

                        <Image source={dot} resizeMode="contain" style={{width:24,height:24}}/>


                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,marginTop:8}}>
                        <View style={{flexDirection:'row',marginTop:16}}>
                            <Image source={RP2} resizeMode="contain" style={{width:55,height:55}}/>
                            <View style={{flexDirection:'column',justifyContent:'center',marginHorizontal:16}}>
                                <Text style={{fontSize:14,fontWeight:600}}>Astronaut In The Ocean</Text>
                                <Text style={{fontSize:12,marginTop:4}}>JK Jones</Text>
                            </View>
                        </View>

                        <Image source={dot} resizeMode="contain" style={{width:24,height:24}}/>


                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,marginTop:8}}>
                        <View style={{flexDirection:'row',marginTop:16}}>
                            <Image source={RP3} resizeMode="contain" style={{width:55,height:55}}/>
                            <View style={{flexDirection:'column',justifyContent:'center',marginHorizontal:16}}>
                                <Text style={{fontSize:14,fontWeight:600}}>Bad Habits</Text>
                                <Text style={{fontSize:12,marginTop:4}}>Ed Sheeran</Text>
                            </View>
                        </View>

                        <Image source={dot} resizeMode="contain" style={{width:24,height:24}}/>


                    </TouchableOpacity>

                


                
            
        </View>
        </ScrollView>
    

    );
}

export default Home;


const SECTIONS = [
    {
      title: 'Albums',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          imageLink: require('../assets/song4.png')
        },
        {
          key: '2',
          text: 'Item text 2',
          imageLink: require('../assets/song2.png')
        },
  
        {
          key: '3',
          text: 'Item text 3',
          imageLink: require('../assets/song3.png')
        },
        {
          key: '4',
          text: 'Item text 4',
          imageLink: require('../assets/song1.png')
        },
        {
          key: '5',
          text: 'Item text 5',
          imageLink: require('../assets/song5.png')
        },
      ],
    }
    
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    sectionHeader: {
      fontWeight: '600',
      fontSize: 18,
      color: 'black',
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      margin: 6,
    },
    itemPhoto: {
      width: 160,
      alignItems:'center',
      height: 160,
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
  });