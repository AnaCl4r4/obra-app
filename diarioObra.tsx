// ARQUIVO: app/(tabs)/diarioObra.tsx

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert, SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function DiarioObra() {
    const router = useRouter();
    // Pega o nome da obra que foi passado pela tela anterior
    const params = useLocalSearchParams();

    const [clima, setClima] = useState('');
    const [equipe, setEquipe] = useState('');
    const [atividades, setAtividades] = useState('');
    const [obs, setObs] = useState('');

    const handleSalvar = () => {
        // Aqui seria a conexão com o Node.js
        // Para o Migué, apenas simulamos o sucesso:
        Alert.alert("Sucesso", "Diário de obra registrado com sucesso!", [
            { text: "OK", onPress: () => router.back() } // Volta para o Dashboard
        ]);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>

                {/* Cabeçalho da Tela */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <MaterialCommunityIcons name="arrow-left" size={28} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Novo Relatório</Text>
                    <View style={{ width: 28 }} /> {/* Espaço vazio para centralizar */}
                </View>

                <Text style={styles.obraNome}>{params.nomeObra || 'Obra Selecionada'}</Text>
                <Text style={styles.dataHoje}>Data: {new Date().toLocaleDateString('pt-BR')}</Text>

                {/* Formulário */}
                <View style={styles.form}>

                    <Text style={styles.label}>🌤️ Clima / Tempo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Sol, Chuva, Nublado..."
                        value={clima}
                        onChangeText={setClima}
                    />

                    <Text style={styles.label}>👷 Equipe Presente</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: João, Maria, José..."
                        value={equipe}
                        onChangeText={setEquipe}
                    />

                    <Text style={styles.label}>🔨 Atividades Realizadas</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Descreva o que foi feito hoje..."
                        multiline={true}
                        numberOfLines={4}
                        value={atividades}
                        onChangeText={setAtividades}
                    />

                    {/* Botão de Foto Simulado */}
                    <TouchableOpacity style={styles.photoButton} onPress={() => Alert.alert('Câmera', 'Abrindo câmera...')}>
                        <MaterialCommunityIcons name="camera" size={24} color="#E53935" />
                        <Text style={styles.photoText}>Adicionar Foto da Obra</Text>
                    </TouchableOpacity>

                    <Text style={styles.label}>📝 Observações Gerais</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Ocorrências, atrasos..."
                        multiline={true}
                        value={obs}
                        onChangeText={setObs}
                    />

                </View>

                {/* Botão Salvar */}
                <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
                    <Text style={styles.saveText}>SALVAR DIÁRIO</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#F5F5F5' },
    container: { padding: 20, paddingBottom: 40 },

    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
    backButton: { padding: 6, alignItems: 'center', justifyContent: 'center' },

    obraNome: { fontSize: 18, fontWeight: 'bold', color: '#E53935', marginBottom: 5 },
    dataHoje: { fontSize: 14, color: '#666', marginBottom: 20 },

    form: { backgroundColor: 'white', padding: 15, borderRadius: 10, elevation: 2 },
    label: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 8, marginTop: 10 },
    input: {
        backgroundColor: '#F9F9F9', borderWidth: 1, borderColor: '#EEE', borderRadius: 8,
        padding: 12, fontSize: 16, color: '#333'
    },
    textArea: { height: 100, textAlignVertical: 'top' },

    photoButton: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        marginTop: 20, padding: 15,
        borderWidth: 1, borderColor: '#E53935', borderStyle: 'dashed', borderRadius: 8
    },
    photoText: { color: '#E53935', fontWeight: 'bold', marginLeft: 10 },

    saveButton: {
        backgroundColor: '#E53935', borderRadius: 8, padding: 18,
        marginTop: 30, alignItems: 'center', elevation: 3
    },
    saveText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
