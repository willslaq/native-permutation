import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native';

import Routes from './src/routes.js';

export default function App() {

  const [arrayResultRandom, setArrayResultRandom] = useState([]);
  const [arrayState, setArrayState] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const

  useEffect(() => {
    // teste()
  }, [])

  var arrayTempMain = [];
  var arrayTemp = [];
  var arrayResult = [];

  function orderedMultiSubsets(set, n) {
    if (!Number.isInteger(n) || n < 0) return function* () { }();
    var subset = new Array(n),
      iterator = set.values();
    return (function* backtrack(index) {
      if (index === n) {
        yield subset.slice();
      } else {
        for (var i = 0; i < set.size; ++i) {
          subset[index] = iterator.next().value; /* Get first item */
          set.delete(subset[index]); /* Remove it */
          set.add(subset[index]); /* Insert it at the end */
          yield* backtrack(index + 1);
        }
      }
    })(0);
  }

  // for (var subset of orderedMultiSubsets(new Set(splitString('1,2,3,4,5,6,7,8,9')), 4)) {
  //   arrayTempMain.push(subset)
  //   // console.log(subset.join());
  // }

  var arrayTeste = []
  function teste() {
    setArrayState([]);
    for (var subset of orderedMultiSubsets(new Set(splitString(searchValue)), 4)) {
      arrayTeste.push(subset)
      // console.log(subset.join());
    }
    // setArrayState([...arrayState, arrayTeste])
    setArrayState(arrayState.concat(arrayTeste))
    console.log('array teste', arrayState)
  }
  console.log(arrayResult)

  function geraListaFull() {
    // for (var subset of orderedMultiSubsets(new Set([8, 5, 3, 2, 4, 0, 1, 4, 7]), 4)) {
    var arrTemp = [];

    // const test = () => orderedMultiSubsets(new Set(splitString(searchValue)), 4);

    // console.log('test', test)

    console.log('test ret', splitString(searchValue))
    // console.log('temp', arrTemp);
    // console.log('result,', arrayResult)
    for (var subset of orderedMultiSubsets(new Set(splitString(searchValue)), 4)) {
      // for (var subset of test()) {
      arrayResult.push(subset)
      // console.log('subset', subset)
      arrayTempMain.push(subset);
      // console.log(subset.join());
    }
  }


  console.log('arrayResul', arrayTempMain)

  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function searchRandomSequence() {
    // var arrayTemp = [];
    for (let index = 0; index < 126; index++) {
      arrayTemp.push(getRandomNumbers(0, arrayResult.length))
    }
    console.log('cominações aleatórias', arrayResultRandom)
    // setArrayResultRandom([...arrayResultRandom, arrayTemp]);
    setArrayResultRandom(arrayTemp => [...arrayTemp]);
    // return arrayRandomResult;
    console.log('state 126', arrayResultRandom)
  }

  // function ShowRandomCombinations(props) {
  //   const arrayRandomResult = { props };
  //   // console.log()
  //   return (

  //   )
  // }
  function splitString(stringToSplit) {
    console.log('split', stringToSplit.split(',').map(Number))
    var arrTemp = []
    arrTemp = stringToSplit.split(',').map(Number)
    return arrTemp
  }

  return (
    // <Routes />
    <View style={styles.container}>
      <View style={styles.titleSequence}>
        <Text>
          Informe a sequencia de 9 números abaixo:
        </Text>
      </View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={e => setSearchValue(e)}
        value={searchValue}
      />
      <View>
        {/* <Button
          title="Gerar 126 combinações"
          onPress={searchRandomSequence}
        /> */}
        <Button
          title="Gerar Todas as Combinações"
          onPress={geraListaFull}
          onPress={teste}
        />
      </View>

      <SafeAreaView style={styles.containerView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.controlaLista}>{arrayState.map((resultado) =>
            <Text>{resultado}</Text>
          )}</View>
        </ScrollView>
      </SafeAreaView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  controlaLista: {
    // flexDirection: 'row',
    maxWidth: '100%'
  }
})