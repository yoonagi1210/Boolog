import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 상단 프로필 정보 */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
          <TouchableOpacity style={styles.addIcon}>
            <Ionicons name="add-circle" size={24} color="#0095f6" />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}><Text style={styles.statNumber}>12</Text><Text style={styles.statLabel}>게시물</Text></View>
          <View style={styles.statItem}><Text style={styles.statNumber}>1.2k</Text><Text style={styles.statLabel}>팔로워</Text></View>
          <View style={styles.statItem}><Text style={styles.statNumber}>150</Text><Text style={styles.statLabel}>팔로잉</Text></View>
        </View>
      </View>

      {/* 자기소개 영역 */}
      <View style={styles.bioContainer}>
        <Text style={styles.displayName}>BOOLOG 공식 계정</Text>
        <Text style={styles.bioText}>나만의 SNS, BOOLOG 개발 일기 📖</Text>
        <Text style={styles.linkText}>github.com/boolog-dev</Text>
      </View>

      {/* 버튼 영역 */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>프로필 편집</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>프로필 공유</Text>
        </TouchableOpacity>
      </View>

      {/* 내 게시물 그리드 (3열) */}
      <View style={styles.gridContainer}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <View key={item} style={styles.gridItem}>
            <Ionicons name="image-outline" size={30} color="#ccc" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles: any = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60 },
  profileHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 },
  avatarContainer: { position: 'relative' },
  avatar: { width: 85, height: 85, borderRadius: 42.5, backgroundColor: '#f0f0f0', borderWidth: 1, borderColor: '#dbdbdb' },
  addIcon: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#fff', borderRadius: 12 },
  statsContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 20 },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold' },
  statLabel: { fontSize: 13, color: '#666' },
  bioContainer: { paddingHorizontal: 20, marginTop: 15 },
  displayName: { fontWeight: 'bold', fontSize: 15 },
  bioText: { fontSize: 14, marginTop: 3 },
  linkText: { fontSize: 14, color: '#00376b', marginTop: 3 },
  buttonRow: { flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, gap: 10 },
  actionButton: { flex: 1, backgroundColor: '#efefef', paddingVertical: 8, borderRadius: 8, alignItems: 'center' },
  buttonText: { fontWeight: '600', fontSize: 14 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 25 },
  gridItem: { 
    width: width / 3 - 1, 
    height: width / 3 - 1, 
    backgroundColor: '#fafafa', 
    borderWidth: 0.5, 
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});