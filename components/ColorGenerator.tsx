import React, { FC, Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { Animated, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DEFAULT_COLORS: Array<string> = [
    '#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999'
]

const ColorGenerator: FC = () => {
    const [colors, setColors] = useState(DEFAULT_COLORS.map(color => {
        return {
            color: color,
            picked: false
        }
    }));
    const [pickedColors, setPickedColors] = useState(new Array<string>());
    const updatePickedColors = (newColor: Array<IColorBlockStatu>) => {
        const newPickedColors: Array<string> = Array<string>();
        newColor.forEach(color => {
            if (color.picked) {
                newPickedColors.push(color.color);
            }
        });
        setPickedColors(newPickedColors);
    }
    return (
        <Fragment>
            <PickedColorView colors={pickedColors}></PickedColorView>
            <CandidateColorView colorStatus={colors} onColorPressed={(index) => {
                const newColor: Array<IColorBlockStatu> = new Array<IColorBlockStatu>(...colors);
                newColor[index].picked = !newColor[index].picked;
                setColors(newColor);
                updatePickedColors(newColor);
            }}/>
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                <View style={{ flex: 1, minWidth: 300 }}>
                    <Button title='Clear unpicked color' onPress={() => {
                        const newColor: Array<IColorBlockStatu> = new Array<IColorBlockStatu>(...colors);
                        for (let i: number = newColor.length - 1; i >= 0 && newColor.length > 1; i--) {
                            if (newColor[i].picked === false) {
                                newColor.splice(i, 1);
                            }
                        }
                        setColors(newColor);
                    }} />
                </View>
                <View style={{ flex: 1, minWidth: 300  }}>
                    <Button title='Random generate unpicked color' onPress={() => {
                        const newColor: Array<IColorBlockStatu> = new Array<IColorBlockStatu>(...colors);
                        newColor.forEach((colorStatu, index, array) => {
                            if (!colorStatu.picked) {
                                array[index].color = getRandomColor();
                            }
                        })
                        setColors(newColor);
                    }} />
                </View>
                <View style={{ flex: 1, minWidth: 300}}>
                    <Button title='Add new color' onPress={() => {
                        const newColor: Array<IColorBlockStatu> = new Array<IColorBlockStatu>(...colors);
                        newColor.push({
                            color: getRandomColor(),
                            picked: false
                        });
                        setColors(newColor);
                    }} />
                </View>
            </View>
        </Fragment>
    );
}
export default ColorGenerator;

interface IColorBlockStatu {
    color: string;
    picked: boolean;
}

interface ICandidateColorViewProp {
    colorStatus: Array<IColorBlockStatu>;
    onColorPressed(index: number): void;
}

const CandidateColorView: FC<ICandidateColorViewProp> = (props) => {
    const { colorStatus, onColorPressed } = props;
    const colorBlockList: Array<ReactElement> = colorStatus.map((colorStatu, index) => (
        <ColorBlock key={index} colorCode={colorStatu.color} picked={colorStatu.picked} onPressed={() => onColorPressed(index)} />
    ));
    return (
        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
            {colorBlockList}
        </View>
    );
}

interface IColorBlockProp {
    colorCode: string;
    picked: boolean;
    onPressed(): void;
}

const ColorBlock: FC<IColorBlockProp> = (props) => {
    const { colorCode, picked, onPressed } = props;
    const flexAnim: Animated.Value = useRef(new Animated.Value(0)).current;
    const minWidthAnim: Animated.Value = useRef(new Animated.Value(24)).current;
    useEffect(() => {
        Animated.timing(
            flexAnim, {
            toValue: 1,
            duration: 666,
            useNativeDriver: true
        }
        ).start();
    }, [flexAnim]);
    useEffect(() => {
        Animated.timing(
            minWidthAnim, {
            toValue: 128,
            duration: 666,
            useNativeDriver: true
        }
        ).start();
    }, [minWidthAnim]);
    return (
        <Animated.View style={{ backgroundColor: colorCode, flex: flexAnim, minWidth: minWidthAnim, minHeight: 64 }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => onPressed()}>
                <Text style={styles.colorCodeText}>{colorCode}</Text>
                <Text style={styles.pickedText}>{picked ? 'Picked!' : ''}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

interface IPickedColorViewProp {
    colors: Array<string>;
}

const PickedColorView: FC<IPickedColorViewProp> = (props) => {
    const { colors } = props;
    const pickedColorList: Array<ReactElement> = colors.map((color, index) => (
        <View key={index} style={{ backgroundColor: color, width: 24, height: 24 }}></View>
    ));
    return (
        <View style={{ justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 4 }}>
            <Text style={{ color: '#ffffff', minHeight: 24 }}>Picked colors: </Text>
            {pickedColorList}
        </View>
    );
}

function getRandomColor(): string {
    let result: string = '#';
    while (result.length < 7) {
        let randomNum: number = Math.floor(Math.random() * 255);
        let hexStr: string = decimalToHexadecimal(randomNum);
        hexStr = hexStr.padStart(2, '0');
        result += hexStr;
    }
    return result;
}

function decimalToHexadecimal(value: number): string {
    return parseInt(value.toString()).toString(16);
}

const styles = StyleSheet.create({
    colorCodeText: {
        color: '#ffffff',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4
    },
    pickedText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 4,
        color: '#ffffff'
    }
});
