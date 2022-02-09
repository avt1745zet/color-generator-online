import { FC, Fragment, ReactElement, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                <View style={{ flex: 1, minWidth: 300 }}>
                    <Button title='Clear unpicked color' color='black' onPress={() => {
                        const newColor: Array<IColorBlockStatu> = new Array<IColorBlockStatu>(...colors);
                        for (let i: number = newColor.length - 1; i >= 0 && newColor.length > 1; i--) {
                            if (newColor[i].picked === false) {
                                newColor.splice(i, 1);
                            }
                        }
                        setColors(newColor);
                    }} />
                </View>
                <View style={{ flex: 1, minWidth: 300 }}>
                    <Button title='Random unpicked color' color='black' onPress={() => {
                        const newColor: Array<IColorBlockStatu> = new Array<IColorBlockStatu>(...colors);
                        newColor.forEach((colorStatu, index, array) => {
                            if (!colorStatu.picked) {
                                array[index].color = getRandomColor();
                            }
                        })
                        setColors(newColor);
                    }} />
                </View>
                <View style={{ flex: 1, minWidth: 300 }}>
                    <Button title='Add new color' color='black' onPress={() => {
                        const newColor: Array<IColorBlockStatu> = new Array<IColorBlockStatu>(...colors);
                        newColor.push({
                            color: getRandomColor(),
                            picked: false
                        });
                        setColors(newColor);
                    }} />
                </View>
            </View>
            <CandidateColorView colorStatus={colors} onColorPressed={(index) => {
                const newColor: Array<IColorBlockStatu> = new Array<IColorBlockStatu>(...colors);
                newColor[index].picked = !newColor[index].picked;
                setColors(newColor);
                updatePickedColors(newColor);
            }}></CandidateColorView>
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
    const candidateColorList: Array<ReactElement> = colorStatus.map((colorStatu, index) => (
        <TouchableOpacity key={index} onPress={() => onColorPressed(index)} style={{ backgroundColor: colorStatu.color, flex: 1, minWidth: 128, minHeight: 128, justifyContent: 'center', alignContent: 'center' }}>
            <Text style={styles.colorCodeText}>{colorStatu.color}</Text>
            <Text style={styles.pickedText}>{colorStatu.picked ? 'Picked!' : ''}</Text>
        </TouchableOpacity>
    ));
    return (
        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', }}>
            {candidateColorList}
        </View>
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
        <View style={{ justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row', minHeight: 24 }}>
            <Text style={{ color: '#ffffff' }}>Picked colors: </Text>
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
    },
});
