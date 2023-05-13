import '../styles/global.css';
import MainLayout from "../components/layout";

export default function App({ Component, pageProps }) {
    return <MainLayout><Component {...pageProps} /></MainLayout>;
}