import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const { width } = Dimensions.get('window');
const columnWidth = width / 3 - 2; // 화면 너비를 3등분

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      {/* 검색 바 */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput 
          style={styles.input} 
          placeholder="BOOLOG 검색" 
          placeholderTextColor="#888"
        />
      </View>

      {/* 그리드 게시물 (샘플) */}
      <ScrollView>
        <View style={styles.gridContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <View key={item} style={styles.gridItem}>
              <Text style={{color: '#999'}}>추천 {item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles: any = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#efefef',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: { marginLeft: 10, flex: 1 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  gridItem: {
    width: columnWidth,
    height: columnWidth,
    backgroundColor: '#eee',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});