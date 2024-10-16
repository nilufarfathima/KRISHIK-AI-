import {AiChat} from '@nlux/react';
import '@nlux/themes/nova.css';
import {streamAdapter} from './adapter.ts';
import {user, botPictureUrl} from './personas.tsx';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import "./Options.css"

export default () => (
  <><Header></Header><AiChat
    adapter={streamAdapter}
    personaOptions={{
      bot: {
        name: 'Krishik AI',
        tagline: 'Farmer assistant is here to help you',
        picture: botPictureUrl,
      },
      user
    }}
    promptBoxOptions={{
      placeholder: 'How can I help you?'
    }}
    layoutOptions={{
      height: 350, maxWidth: 430
    }} />
    <Footer></Footer>
    </>
);