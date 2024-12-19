import { redirect } from 'next/navigation';
import Navbar from './navbar';
import Article from './article';
import Content from './content';
import Katalog from './katalog';
import About from './about';
import Footer from './footer';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Content />
            <Article />
            <Katalog />
            <About />
            <Footer />
        </>
    );
  }