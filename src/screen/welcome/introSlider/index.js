import {Alert, StatusBar} from 'react-native';
import React from 'react';

import {Button, Icon} from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const Intro = ({navigation}) => (
  <Onboarding
    showDone={false}
    onSkip={() => navigation.navigate('Login')}
    pages={[
      {
        title: 'Tích điểm đổi quà',
        subtitle: 'Dùng điểm đổi hàng ngàn uu đãi hấp dẫn',
        backgroundColor: '#59b2ab',
        image: (
          <Icon
            name="hand-peace-o"
            type="font-awesome"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: 'Chương trình điểm thưởng',
        subtitle: 'Thưởng thức cafe hay chơi game đều được  tích điểm',
        backgroundColor: '#febe29',
        image: (
          <Icon
            name="paper-plane-o"
            type="font-awesome"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: 'Giao hàng tận nơi',
        subtitle: 'Đặt món giao hàng tận nơi trong vòng 30 phút',
        backgroundColor: '#22bcb5',
        image: (
          <Icon name="bell-o" type="font-awesome" size={100} color="white" />
        ),
      },
      {
        title: "That's Enough",
        subtitle: (
          <Button
            title={'Bắt đầu trải nghiệm'}
            containerViewStyle={{marginTop: 20}}
            backgroundColor={'white'}
            borderRadius={5}
            textStyle={{color: '#003c8f'}}
            onPress={() => {
              navigation.navigate('Login');
              StatusBar.setBarStyle('default');
            }}
          />
        ),
        backgroundColor: '#003c8f',
        image: (
          <Icon name="rocket" type="font-awesome" size={100} color="white" />
        ),
      },
    ]}
  />
);

export default Intro;
