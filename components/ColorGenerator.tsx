import { FC, Fragment } from "react";
import { Button, Text, View } from "react-native";

const DEFAULT_COLORS: Array<string> = [
    '#000000','#111111','#222222','#333333','#444444','#555555','#666666','#777777','#888888','#999999'
]

const ColorGenerator: FC = () => {
    return (
        <Fragment>
            <View style={{ justifyContent: 'center', flexWrap: 'wrap', flexDirection: "row", padding: 3 }}>
                <Text style={{ color: '#ffffff' }}>Saved colors: </Text>
                <View style={{ backgroundColor: '#000000', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#111111', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#222222', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#333333', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#444444', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#555555', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#666666', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#777777', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#888888', width: 24, height: 24 }}>  </View>
                <View style={{ backgroundColor: '#999999', width: 24, height: 24 }}>  </View>
            </View>
            <View>
                <Button title="Random" color='black' onPress={() => window.alert('Hi')}></Button>
            </View>
            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: "row", }}>
                <View style={{ backgroundColor: '#000000', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#000000</Text>
                </View>
                <View style={{ backgroundColor: '#111111', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#111111</Text>
                </View>
                <View style={{ backgroundColor: '#222222', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#222222</Text>
                </View>
                <View style={{ backgroundColor: '#333333', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#333333</Text>
                </View>
                <View style={{ backgroundColor: '#444444', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#444444</Text>
                </View>
                <View style={{ backgroundColor: '#555555', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#555555</Text>
                </View>
                <View style={{ backgroundColor: '#666666', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#666666</Text>
                </View>
                <View style={{ backgroundColor: '#777777', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#777777</Text>
                </View>
                <View style={{ backgroundColor: '#888888', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#888888</Text>
                </View>
                <View style={{ backgroundColor: '#999999', flex: 1, minWidth: 128, minHeight: 128 }}>
                    <Text style={{ color: '#ffffff', position: 'absolute', top: '50%', width: '100%', textAlign: 'center' }}>#999999</Text>
                </View>
            </View>
        </Fragment>
    );
}
export default ColorGenerator;

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