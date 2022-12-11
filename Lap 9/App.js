import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Image } from 'react-native';
import { Dimensions } from 'react-native';
const cat_cool = require("./assets/cat_cool.png")
const cat_angry = require("./assets/cat_angry.png")


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min))
}

export default function App() {
  const [countTouch, setCountTouch] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const [tom, setTom] = useState({
    x: new Animated.Value(10),
    y: new Animated.Value(10)
  });
  const [rat1, setRat1] = useState({
    key: 'rat1',
    alive: random(3, 7),
    x: new Animated.Value(random(50, windowWidth - 50)),
    y: new Animated.Value(random(50, windowHeight - 50))
  });
  const [rat2, setRat2] = useState({
    key: 'rat2',
    alive: random(3, 7),
    x: new Animated.Value(random(50, windowWidth - 50)),
    y: new Animated.Value(random(50, windowHeight - 50))
  });
  const [rat3, setRat3] = useState({
    key: 'rat3',
    alive: random(3, 7),
    x: new Animated.Value(random(50, windowWidth - 50)),
    y: new Animated.Value(random(50, windowHeight - 50))
  });

  function onPress(evt) {
    if(disabled)return
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    console.log(x, y)
    setTom({
      x: x - 50,
      y: y - 50
    })
    setCountTouch(countTouch + !(rat1.alive == 0 && rat2.alive == 0 && rat3.alive == 0))
  }

  const onPressRat = (e, rat, setRat) => {
    if(disabled)return
    setTom({
      x: e.nativeEvent.pageX - 50,
      y: e.nativeEvent.pageY - 50,
    })
    setRat1({
      ...rat1,
      alive: rat1.alive - (rat.key == 'rat1'),
      x: random(50, windowWidth - 50),
      y: random(50, windowHeight - 50)
    })
    setRat2({
      ...rat2,
      alive: rat2.alive - (rat.key == 'rat2'),
      x: random(50, windowWidth - 50),
      y: random(50, windowHeight - 50)
    })
    setRat3({
      ...rat3,
      alive: rat3.alive - (rat.key == 'rat3'),
      x: random(50, windowWidth - 50),
      y: random(50, windowHeight - 50)
    })
    console.log("rat", rat1, rat2, rat3)
    setCountTouch(countTouch + !(rat1.alive == 0 && rat2.alive == 0 && rat3.alive == 0))
  }

  useEffect(() => {
    if(rat1.alive == 0 && rat2.alive == 0 && rat3.alive == 0){
      setTom({x: windowWidth/2-80, y: windowHeight/2-70})
      setDisabled(true)
    }
  }, [rat1, rat2, rat3])

  return (
    <View
      onStartShouldSetResponder={() => true}
      // onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      // onResponderMove={onMove}
      // onResponderRelease={onRelease}
      style={{
        flex: 1
      }}>
      <Animated.View
        style={{ position: 'absolute', top: tom.y, left: tom.x }}
      >
        <View style={{textAlign: 'center', alignItems: 'center' }}>
          <Image
            source={rat1.alive == 0 && rat2.alive == 0 && rat3.alive == 0 ? cat_cool : cat_angry}
            style={{ width: 100, height: 100 }}
          />
          {rat1.alive == 0 && rat2.alive == 0 && rat3.alive == 0 ?
            <>
              <Text style={{
                fontSize: 20,
                fontWeight: '500'
              }}>You win!!!</Text>
              <Text style={{
                fontSize: 20,
                fontWeight: '300'
              }}>Bạn đã bấm {countTouch} lần</Text>
            </>
            : null
          }
        </View>
      </Animated.View>
      {rat1.alive <= 0 ? null :
        <Animated.View
          style={{ position: 'absolute', top: rat1.y, left: rat1.x }}
        >
          <TouchableOpacity
            onPress={(e) => onPressRat(e, rat1, setRat1)}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={require("./assets/rat.png")} />
          </TouchableOpacity>
        </Animated.View>
      }
      {rat2.alive <= 0 ? null :
        <Animated.View
          style={{ position: 'absolute', top: rat2.y, left: rat2.x }}
        >
          <TouchableOpacity
            onPress={(e) => onPressRat(e, rat2, setRat2)}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={require("./assets/rat.png")} />
          </TouchableOpacity>
        </Animated.View>
      }
      {rat3.alive <= 0 ? null :
        <Animated.View
          style={{ position: 'absolute', top: rat3.y, left: rat3.x }}
        >
          <TouchableOpacity
            onPress={(e) => onPressRat(e, rat3, setRat3)}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={require("./assets/rat.png")} />
          </TouchableOpacity>
        </Animated.View>
      }


    </View>
  );
}
