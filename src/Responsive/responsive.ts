import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const rS = (size: number) => {
    return scale(size)
}

const rV = (size: number) => {
    return verticalScale(size)
}

const rMS = (size: number, factor?: number) => {
    return moderateScale(size, factor)
}
export { rS, rV, rMS };