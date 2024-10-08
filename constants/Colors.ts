/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#faf064';
const tintColorDark = '#fff';
const tabBackgroundColor = '#a6a6a6';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#c6c6c6',
    tabIconDefault: '#c6c6c6',
    tabIconSelected: tintColorLight,
    tabBackgroundColor: tabBackgroundColor
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tabBackgroundColor: tabBackgroundColor
  },
};
