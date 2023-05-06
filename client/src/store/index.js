import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#e86af0',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './chatgpt.png',
  fullDecal: './chatgpt.png',
});

export default state;