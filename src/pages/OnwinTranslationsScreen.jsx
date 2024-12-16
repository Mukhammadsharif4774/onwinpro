import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import OnwinHeader from '../components/OnwinHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams.toUpperCase()}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <OnwinHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'IPL',
          '02.02 00:35',
          'ROYAL CHALLENGERS -' + ' CHENNAI KINGS',
        )}
        {renderBroadcast('UEFA', '06.02 22:15', 'Napoli -' + ' Liverpool')}
        {renderBroadcast(
          'NHL',
          '08.02 23:40',
          'New York Islanders -' + ' New Jersey Devils',
        )}
        {renderBroadcast('IIHF', '10.02 03:00', 'Australia  -' + ' Canada')}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.main,
    width: 150,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.pink,
    textAlign: 'left',
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.regular,
    fontSize: 17,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 5,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.pink,
    paddingBottom: 10,
  },
});
