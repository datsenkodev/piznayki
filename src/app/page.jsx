import Kids from '@components/kids';
import Hero from '@home/hero';
import Message from '@home/message';
import Advices from '@home/advices';
import Faq from '@home/faq';
import About from '@home/about';

export default function Home() {
  return (
    <main>
      <Hero />
      <Message />
      <About />
      <Faq />
      <Advices />
      <Kids />
    </main>
  );
}
