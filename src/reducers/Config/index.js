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
        };
    case 'SET_PHOTO_TUTORIAL_SCREENS':
    return {
        ...state,
        showTutorialScreen: true,
        tutorialScreens: PhotoTutorial,
      };
    case 'SET_ALREADY_SHOWINITIALTUTORIAL':
        return {
            ...state,
            showTutorialScreen: false,
            tutorialScreens: [],
            alreadyShowInitialTutorial: true,
        };
    case 'SET_ALREADY_SHOWPHOTOTUTORIAL':
        return {
            ...state,
            showTutorialScreen: false,
            tutorialScreens: [],
            alreadyShowPhotoTutorial: true,
        };
    default:
      return state;
  }
}