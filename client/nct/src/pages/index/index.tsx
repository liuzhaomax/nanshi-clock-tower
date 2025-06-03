import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.css';
import imgNct from '../../asset/img/nct.jpg';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image src={imgNct} className={styles.logo} />
        <View className={styles.text}>
          南市中楼 <Text className={styles.path}>123</Text>
        </View>
      </View>
    </View>
  );
};
