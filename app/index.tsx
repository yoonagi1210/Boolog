import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  
  // 입력값을 저장할 바구니(state)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 지금은 아이디/비번 상관없이 버튼 누르면 통과!
    // 나중에는 여기서 이메일 형식이 맞는지 등을 체크하게 됩니다.
    router.replace('/(tabs)'); 
  };

  return (
    // 키보드가 올라올 때 화면이 가려지지 않게 방지
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.logo}>BOOLOG</Text>
          
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="이메일 또는 사용자 이름"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail} // 타이핑할 때마다 email 변수에 저장
              autoCapitalize="none"
            />
            <TextInput 
              style={styles.input}
              placeholder="비밀번호"
              placeholderTextColor="#999"
              secureTextEntry // 비밀번호를 별표(***)로 표시
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity 
            style={[styles.loginButton, { opacity: email && password ? 1 : 0.6 }]} 
            onPress={handleLogin}
            disabled={!email || !password} // 둘 다 입력 안 하면 버튼 안 눌리게
          >
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>계정이 없으신가요? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>가입하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, justifyContent: 'center', paddingHorizontal: 40 },
  logo: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 50, 
    color: '#262626',
    letterSpacing: 3
  },
  inputContainer: { gap: 12, marginBottom: 20 },
  input: { 
    backgroundColor: '#fafafa', 
    borderWidth: 1, 
    borderColor: '#dbdbdb', 
    padding: 15, 
    borderRadius: 5,
    fontSize: 14
  },
  loginButton: { 
    backgroundColor: '#0095f6', 
    paddingVertical: 14, 
    borderRadius: 5, 
    alignItems: 'center',
    marginTop: 10
  },
  loginButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 40 
  },
  footerText: { color: '#8e8e8e', fontSize: 13 },
  signUpText: { color: '#0095f6', fontWeight: 'bold', fontSize: 13 }
});