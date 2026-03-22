import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');
// 상단 높이를 화면의 약 40%까지 더 줄여서 게시물을 최대한 끌어올립니다.
const TOP_HEIGHT = height * 0.35; 

export default function ProfileScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* 1. 상단 프로필 영역 (컴팩트 버전) */}
      <View style={[styles.topSection, { height: TOP_HEIGHT }]}>
        
        <TouchableOpacity 
          style={styles.settingsButton} 
          onPress={() => setMenuVisible(true)}
        >
          <Ionicons name="settings-outline" size={24} color="#262626" />
        </TouchableOpacity>

        <View style={styles.profileContentCenter}>
          {/* 사진 크기를 살짝 줄여 공간 확보 (110 -> 100) */}
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar} />
            <TouchableOpacity style={styles.addIcon}>
              <Ionicons name="add-circle" size={24} color="#0095f6" />
            </TouchableOpacity>
          </View>

          {/* 자기소개 영역 간격 최소화 */}
          <View style={styles.bioCenterContainer}>
            <Text style={styles.displayName}>BOOLOG 공식 계정</Text>
            <Text style={styles.bioText}>나만의 SNS, BOOLOG 개발 일기 📖</Text>
            <Text style={styles.linkText}>github.com/yoonagi1210</Text>
          </View>

          {/* 통계 바: 더 얇고 간결하게 */}
          <View style={styles.statsFullRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>게시물</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1.2k</Text>
              <Text style={styles.statLabel}>팔로워</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>150</Text>
              <Text style={styles.statLabel}>팔로잉</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 2. 하단 게시물 영역 (이제 훨씬 더 많이 보입니다!) */}
      <View style={styles.bottomSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.gridContainer}>
            {/* 데이터가 많아도 스크롤로 시원하게 볼 수 있습니다 */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((item) => (
              <View key={item} style={styles.gridItem}>
                <Ionicons name="image-outline" size={30} color="#ccc" />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* 모달 생략 (이전 코드와 동일) */}
      <Modal animationType="fade" transparent={true} visible={menuVisible} onRequestClose={() => setMenuVisible(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menuContent}>
            <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>프로필 편집</Text></TouchableOpacity>
            <View style={styles.menuSeparator} />
            <TouchableOpacity style={styles.menuItem}><Text style={styles.menuText}>프로필 공유</Text></TouchableOpacity>
            <View style={styles.menuSeparator} />
            <TouchableOpacity style={styles.menuItem} onPress={() => setMenuVisible(false)}><Text style={[styles.menuText, { color: 'red' }]}>취소</Text></TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topSection: { 
    paddingHorizontal: 20, 
    paddingTop: 50, // 상단 여백 
    justifyContent: 'center', 
    alignItems: 'center',
    borderBottomWidth: 1, 
    borderBottomColor: '#efefef',
    position: 'relative'
  },
  settingsButton: { position: 'absolute', top: 45, right: 15, zIndex: 10 },
  profileContentCenter: { alignItems: 'center', width: '100%' },
  
  // 사진 영역
  avatarWrapper: { position: 'relative', marginBottom: 20 }, 
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#f0f0f0', borderWidth: 1, borderColor: '#dbdbdb' },
  addIcon: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#fff', borderRadius: 12 },
  
  // 자기소개 영역 
  bioCenterContainer: { alignItems: 'center', marginBottom: 20 }, 
  displayName: { fontWeight: 'bold', fontSize: 16, marginBottom: 1 },
  bioText: { fontSize: 13, color: '#262626', textAlign: 'center' },
  linkText: { fontSize: 13, color: '#00376b', marginTop: 1 },

  // 통계 바 영역
  statsFullRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '100%',
    paddingVertical: 6, 
    backgroundColor: '#fafafa', 
    borderRadius: 6 
  },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 15, fontWeight: 'bold' },
  statLabel: { fontSize: 11, color: '#666' },

  bottomSection: { flex: 1 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  gridItem: { 
    width: width / 3 - 1, 
    height: width / 3 - 1, 
    backgroundColor: '#fafafa', 
    borderWidth: 0.5, 
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  menuContent: { width: width * 0.8, backgroundColor: '#fff', borderRadius: 15, overflow: 'hidden' },
  menuItem: { paddingVertical: 15, alignItems: 'center' },
  menuText: { fontSize: 16, fontWeight: '500' },
  menuSeparator: { height: 1, backgroundColor: '#efefef' }
});