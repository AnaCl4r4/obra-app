// app/index.tsx
import { Redirect } from 'expo-router';

export default function Index() {
  // Como a pasta chama (auth), a rota é apenas /login
  return <Redirect href={{ pathname: '/auth/login' }} />;
}