export default function ImagePin(type) {
    switch(type){
        case 1:
            return require('../../assets/images/marketTypePins/1.png');
        case 2:
            return require('../../assets/images/marketTypePins/2.png');
        case 3:
            return require('../../assets/images/marketTypePins/3.png');
        case 4:
            return require('../../assets/images/marketTypePins/4.png');
        case 5:
            return require('../../assets/images/marketTypePins/5.png');
        case 6:
            return require('../../assets/images/marketTypePins/6.png');
        case 7:
            return require('../../assets/images/marketTypePins/7.png');
        case 8:
            return require('../../assets/images/marketTypePins/8.png');
        case 10:
            return require('../../assets/images/marketTypePins/10.png');
        default:
            return require('../../assets/images/marketTypePins/9.png');
    }
}