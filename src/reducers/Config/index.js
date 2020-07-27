import { InitialTutorial, PhotoTutorial } from './tutorials';

const initialState = {
    tutorialScreens: [],
    showTutorialScreen: false,
    alreadyShowInitialTutorial: false,
    alreadyShowPhotoTutorial: false,
}

export default function config(state = initialState, action) {
  switch (action.type) {
    case 'SET_INITIAL_TUTORIAL_SCREENS':
      return {
          ...state,
          showTutorialScreen: true,
          tutorialScreens: InitialTutorial,
          alreadyShowInitialTutorial: true,
        };
    case 'SET_PHOTO_TUTORIAL_SCREENS':
    return {
        ...state,
        showTutorialScreen: true,
        tutorialScreens: PhotoTutorial,
        alreadyShowPhotoTutorial: true,
      };
    case 'HIDE_TUTORIAL_SCREEN':
        return {
            ...state,
            tutorialScreens: [],
            showTutorialScreen: false,
        };
    default:
      return state;
  }
}